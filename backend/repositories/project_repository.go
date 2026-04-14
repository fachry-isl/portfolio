package repositories

import (
	"database/sql"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/fachry-isl/portfolio/models"

	"context"
)

type ProjectRepository struct {
	db *pgxpool.Pool
}

func NewProjectRepository(db *pgxpool.Pool) *ProjectRepository {
	return &ProjectRepository{db: db}
}

func (r *ProjectRepository) GetAll() ([]models.Project, error) {
	query := "SELECT id, title, summary, cover_url, demo_url, repo_url FROM portfolio_projects"

	ctx := context.Background()

	rows, err := r.db.Query(ctx, query)
	if err != nil {
		return nil, err
	}

	var projects []models.Project
	for rows.Next() {
		var p models.Project
		err := rows.Scan(&p.ID, &p.Title, &p.Summary, &p.CoverURL, &p.DemoURL, &p.RepoURL)
		if err != nil {
			return nil, err
		}

		projects = append(projects, p)
	}

	return projects, nil

}

func (r *ProjectRepository) GetByID(id string) (*models.Project, error) {
	ctx := context.Background()
	var p models.Project
	// fmt.Println("ID: %v", id)
	err := r.db.QueryRow(ctx, "SELECT * FROM portfolio_projects WHERE id = $1", id).Scan(&p.ID, &p.Slug, &p.Title, &p.Summary, &p.Content, &p.CoverURL, &p.DemoURL, &p.RepoURL, &p.Tags, &p.Featured, &p.Status, &p.PublishedAt, &p.CreatedAt)
	if err == sql.ErrNoRows {
		return nil, fmt.Errorf("No Project Found")
	}
	if err != nil {
		return nil, err
	}
	return &p, nil
}
