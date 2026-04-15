package handlers

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/fachry-isl/portfolio/services"
	"github.com/google/uuid"
)

type PostHandler struct {
	service *services.PostService
}

func NewPostHandler(service *services.PostService) *PostHandler {
	return &PostHandler{service: service}
}

func (h *PostHandler) HandlePost(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.GetAll(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func (h *PostHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	posts, err := h.service.GetAll()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var result []map[string]string
	for _, p := range posts {
		result = append(result, map[string]string{
			"id":        p.ID.String(),
			"slug":      p.Slug,
			"title":     p.Title,
			"summary":   *p.Summary,
			"cover_url": *p.CoverURL,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}

func (h *PostHandler) HandlePostByIDorSlug(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.GetByIDorSlug(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func (h *PostHandler) GetByIDorSlug(w http.ResponseWriter, r *http.Request) {
	segment := strings.TrimPrefix(r.URL.Path, "/api/posts/")

	if segment == "" {
		h.GetAll(w, r)
	}

	if _, err := uuid.Parse(segment); err == nil {
		post, err := h.service.GetByID(segment)

		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(post)
	} else {
		post, err := h.service.GetBySlug(segment)
		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(post)
	}

}

// func (h *PostHandler) GetByID(w http.ResponseWriter, r *http.Request) {
// 	idStr := strings.TrimPrefix(r.URL.Path, "/api/posts/")
// 	// fmt.Println("ID: ", idStr)
// 	if idStr == "" {
// 		h.GetAll(w, r)
// 		return
// 	}

// 	post, err := h.service.GetByID(idStr)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusNotFound)
// 		return
// 	}

// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(post)
// }

// func (h *PostHandler) GetBySlug(w http.ResponseWriter, r *http.Request) {
// 	slugStr := strings.TrimPrefix(r.URL.Path, "/api/posts/")

// 	if slugStr == "" {
// 		h.GetAll(w, r)
// 		return
// 	}

// 	post, err := h.service.GetBySlug(slugStr)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusNotFound)
// 		return
// 	}

// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(post)
// }
