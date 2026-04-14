package services

import (
	"github.com/fachry-isl/portfolio/models"
	"github.com/fachry-isl/portfolio/repositories"
)

type PostService struct {
	repo *repositories.PostRepository
}

func NewPostService(repo *repositories.PostRepository) *PostService {
	return &PostService{repo: repo}
}

func (s *PostService) GetAll() ([]models.Post, error) {
	return s.repo.GetAll()
}

func (s *PostService) GetByID(id string) (*models.Post, error) {
	return s.repo.GetByID(id)
}
