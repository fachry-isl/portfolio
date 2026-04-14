package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/fachry-isl/portfolio/database"
	"github.com/fachry-isl/portfolio/handlers"
	"github.com/fachry-isl/portfolio/repositories"
	"github.com/fachry-isl/portfolio/services"

	"github.com/joho/godotenv"

	"log"
	"net/http"
	"time"
)

// --- Simple Logging Middleware ---
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		log.Printf("→ %s %s from %s", r.Method, r.URL.Path, r.RemoteAddr)
		next.ServeHTTP(w, r)
		log.Printf("← %s %s completed in %v", r.Method, r.URL.Path, time.Since(start))
	})
}

func main() {
	// Load Environment Variable
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
	DATABASE_URL := os.Getenv("DATABASE_URL")

	// Established DB Connection
	db, err := database.InitDB(DATABASE_URL)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect: %v\n", err)
		os.Exit(1)
	}
	defer db.Close()

	profileRepo := repositories.NewProfileRepository(db)
	profileService := services.NewProfileService(profileRepo)
	profileHandler := handlers.NewProfileHandler(profileService)

	projectRepo := repositories.NewProjectRepository(db)
	projectService := services.NewProjectService(projectRepo)
	projectHandler := handlers.NewProjectHandler(projectService)

	postRepo := repositories.NewPostRepository(db)
	postService := services.NewPostService(postRepo)
	postHandler := handlers.NewPostHandler(postService)

	// Setup Routes
	mux := http.NewServeMux()

	// GET localhost:8080/api/profiles
	mux.HandleFunc("/api/profiles", profileHandler.HandleProfiles)

	// GET localhost:8080/api/projects
	mux.HandleFunc("/api/projects", projectHandler.HandleProjects)
	// GET localhost:8080/api/projects/{id}
	mux.HandleFunc("/api/projects/", projectHandler.HandleProjectByID)

	// Get localhost:8080/api/posts
	mux.HandleFunc("/api/posts", postHandler.HandlePost)
	// Get localhost:8080/api/posts/{id}
	mux.HandleFunc("/api/posts/", postHandler.HandlePostByID)

	// localhost:8080/health
	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"message": "API is Running!",
		})
	})

	fmt.Println("Server run at :8080 ✅")
	err = http.ListenAndServe(":8080", loggingMiddleware(mux))
	if err != nil {
		fmt.Println("Failed to load server at :8080")
	}
}
