package services

import (
	"github.com/fachry-isl/portfolio/models"
	"github.com/fachry-isl/portfolio/repositories"
)

type ProfileService struct {
	repo *repositories.ProfileRepository
}

func NewProfileService(repo *repositories.ProfileRepository) *ProfileService {
	return &ProfileService{repo: repo}
}

func (s *ProfileService) GetAll() ([]models.Profile, error) {
	return s.repo.GetAll()
}
