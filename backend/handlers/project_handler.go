package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/fachry-isl/portfolio/services"

	"strings"
)

type ProjectHandler struct {
	service *services.ProjectService
}

func NewProjectHandler(service *services.ProjectService) *ProjectHandler {
	return &ProjectHandler{service: service}
}

// Handle Projects - GET /api/projects
func (h *ProjectHandler) HandleProjects(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.GetAll(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func (h *ProjectHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	projects, err := h.service.GetAll()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	var result []map[string]string
	for _, p := range projects {
		result = append(result, map[string]string{
			"id":        p.ID.String(),
			"title":     p.Title,
			"summary":   *p.Summary,
			"cover_url": *p.CoverURL,
			"demo_url":  *p.DemoURL,
			"repo_url":  *p.RepoURL,
		})
	}

	json.NewEncoder(w).Encode(result)
}

func (h *ProjectHandler) HandleProjectByID(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.GetByID(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func (h *ProjectHandler) GetByID(w http.ResponseWriter, r *http.Request) {
	idStr := strings.TrimPrefix(r.URL.Path, "/api/projects/")
	// fmt.Println("ID: ", idStr)
	if idStr == "" {
		h.GetAll(w, r)
		return
	}

	project, err := h.service.GetByID(idStr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(project)
}
