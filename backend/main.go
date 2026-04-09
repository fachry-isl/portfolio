package main

import (
	"encoding/json"
	"fmt"

	"github.com/fachry-isl/portfolio/models"

	"log"
	"net/http"
	"time"

	"github.com/google/uuid"
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

// Dummy Data
var profiles = []models.Profile{
	{
		ID:          uuid.MustParse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
		DisplayName: "Fachry Ikhsal",
		Bio:         "Backend engineer passionate about Go and clean APIs.",
		AvatarURL:   "https://example.com/avatars/fachry.jpg",
		Links:       json.RawMessage(`{"github":"https://github.com/fachry-isl","linkedin":"https://linkedin.com/in/fachry"}`),
		UpdatedAt:   time.Now(),
	},
	{
		ID:          uuid.MustParse("b2c3d4e5-f6a7-8901-bcde-f12345678901"),
		DisplayName: "Marie Adly",
		Bio:         "Full-stack developer who loves building beautiful UIs.",
		AvatarURL:   "",
		Links:       json.RawMessage(`{"github":"https://github.com/marieadly"}`),
		UpdatedAt:   time.Date(2025, 10, 1, 0, 0, 0, 0, time.UTC),
	},
	{
		ID:          uuid.MustParse("c3d4e5f6-a7b8-9012-cdef-123456789012"),
		DisplayName: "Daffa Alghifari",
		Bio:         "",
		AvatarURL:   "https://example.com/avatars/daffa.jpg",
		Links:       json.RawMessage(`{}`), // empty links object
		UpdatedAt:   time.Date(2025, 11, 15, 8, 30, 0, 0, time.UTC),
	},
}

func main() {
	mux := http.NewServeMux()

	// GET localhost:8080/api/profiles
	// POST localhost:8080/api/profiles
	mux.HandleFunc("/profiles", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			w.Header().Set("Content-Type", "application/json")
			err := json.NewEncoder(w).Encode(profiles)
			if err != nil {
				http.Error(w, "Invalid Request", http.StatusBadGateway)
			}
		}

		if r.Method == "POST" {
			// Read request
			var newProfile models.Profile
			err := json.NewDecoder(r.Body).Decode(&newProfile)
			if err != nil {
				http.Error(w, "Invalid Request", http.StatusBadRequest)
			}

			fmt.Println("Body: ", newProfile)
			newProfile.ID = uuid.New()
			profiles = append(profiles, newProfile)

			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(newProfile)
		}
	})

	// localhost:8080/health
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"status":  "OK",
			"message": "API Running",
		})
	})

	fmt.Println("Server run at :8080 ✅")
	err := http.ListenAndServe(":8080", loggingMiddleware(mux))
	if err != nil {
		fmt.Println("Failed to load server at :8080")
	}

	// Load Environment Variable
	// err := godotenv.Load(".env")
	// if err != nil {
	// 	fmt.Println("Error loading .env file")
	// }
	// DATABASE_URL := os.Getenv("DATABASE_URL")

	// // Established DB Connection
	// db, err := database.InitDB(DATABASE_URL)

	// if err != nil {
	// 	fmt.Fprintf(os.Stderr, "Unable to connect: %v\n", err)
	// 	os.Exit(1)
	// }
	// defer db.Close()

	// Quert Starts here
	// ctx := context.Background()
	// ctx, _ = context.WithTimeout(ctx, 100*time.Millisecond)
	// CollectRows automatically iterates and scans for you
	// rows, err := db.Query(ctx, "SELECT id, lesson_name FROM public.learnesia_lesson LIMIT 5")
	// if err != nil {
	// 	fmt.Printf("Query error: %v\n", err)
	// }

	// lessons, err := pgx.CollectRows(rows, pgx.RowToStructByName[Lesson])
	// if err != nil {
	// 	fmt.Printf("CollectRows error: %v\n", err)
	// 	return
	// }

	// fmt.Printf("Retrieved %d lessons:\n", len(lessons))
	// for _, l := range lessons {
	// 	fmt.Printf(" - [%d] %s\n", l.ID, l.LessonName)
	// }
}
