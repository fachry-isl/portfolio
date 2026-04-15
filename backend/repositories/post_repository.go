package repositories

import (
	"database/sql"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/fachry-isl/portfolio/models"

	"context"
)

type PostRepository struct {
	db *pgxpool.Pool
}

func NewPostRepository(db *pgxpool.Pool) *PostRepository {
	return &PostRepository{db: db}
}

func (r *PostRepository) GetAll() ([]models.Post, error) {
	query := "SELECT * FROM portfolio_posts"

	ctx := context.Background()

	rows, err := r.db.Query(ctx, query)
	if err != nil {
		return nil, err
	}

	var posts []models.Post
	for rows.Next() {
		var p models.Post
		err := rows.Scan(&p.ID, &p.Slug, &p.Title, &p.Summary, &p.Content, &p.CoverURL, &p.Tags, &p.Featured, &p.Status, &p.PublishedAt, &p.CreatedAt)
		if err != nil {
			return nil, err
		}

		posts = append(posts, p)
	}

	return posts, nil
}

func (r *PostRepository) GetByID(id string) (*models.Post, error) {
	ctx := context.Background()
	var p models.Post
	// fmt.Println("ID: %v", id)
	err := r.db.QueryRow(ctx, "SELECT * FROM portfolio_posts WHERE id = $1", id).Scan(&p.ID, &p.Slug, &p.Title, &p.Summary, &p.Content, &p.CoverURL, &p.Tags, &p.Featured, &p.Status, &p.PublishedAt, &p.CreatedAt)
	if err == sql.ErrNoRows {
		return nil, fmt.Errorf("No Post Found")
	}
	if err != nil {
		return nil, err
	}
	return &p, nil
}

func (r *PostRepository) GetBySlug(slug string) (*models.Post, error) {
	ctx := context.Background()
	var p models.Post

	err := r.db.QueryRow(ctx, "SELECT * FROM portfolio_posts WHERE slug = $1", slug).Scan(&p.ID, &p.Slug, &p.Title, &p.Summary, &p.Content, &p.CoverURL, &p.Tags, &p.Featured, &p.Status, &p.PublishedAt, &p.CreatedAt)
	if err == sql.ErrNoRows {
		return nil, fmt.Errorf("No Post Found")
	}
	if err != nil {
		return nil, err
	}
	return &p, nil
}
