package repositories

import (
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
