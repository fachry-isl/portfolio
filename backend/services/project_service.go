package services

import (
	"github.com/fachry-isl/portfolio/models"
	"github.com/fachry-isl/portfolio/repositories"
)

type ProjectService struct {
	repo *repositories.ProjectRepository
}

func NewProjectService(repo *repositories.ProjectRepository) *ProjectService {
	return &ProjectService{repo: repo}
}

func (s *ProjectService) GetAll() ([]models.Project, error) {
	return s.repo.GetAll()
}

func (s *ProjectService) GetByID(id string) (*models.Project, error) {
	return s.repo.GetByID(id)
}
