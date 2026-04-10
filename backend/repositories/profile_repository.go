package repositories

import (
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/fachry-isl/portfolio/models"

	"context"
	"fmt"
)

type ProfileRepository struct {
	db *pgxpool.Pool
}

func NewProfileRepository(db *pgxpool.Pool) *ProfileRepository {
	return &ProfileRepository{db: db}
}

func (r *ProfileRepository) GetAll() ([]models.Profile, error) {
	query := "SELECT * FROM portfolio_profile"

	ctx := context.Background()

	rows, err := r.db.Query(ctx, query)
	if err != nil {
		return nil, err
	}

	fmt.Println(rows)

	var profiles []models.Profile
	for rows.Next() {
		var p models.Profile
		err := rows.Scan(&p.ID, &p.DisplayName, &p.Bio, &p.AvatarURL, &p.Links, &p.UpdatedAt)
		if err != nil {
			return nil, err
		}

		profiles = append(profiles, p)
	}

	return profiles, nil

}
