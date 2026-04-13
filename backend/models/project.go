package models

import (
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

type Project struct {
	ID          uuid.UUID      `db:"id" json:"id"`
	Slug        string         `db:"slug" json:"slug"`
	Title       string         `db:"title" json:"title"`
	Summary     *string        `db:"summary" json:"summary,omitempty"`
	Content     *string        `db:"content" json:"content,omitempty"`
	CoverURL    *string        `db:"cover_url" json:"cover_url,omitempty"`
	DemoURL     *string        `db:"demo_url" json:"demo_url,omitempty"`
	RepoURL     *string        `db:"repo_url" json:"repo_url,omitempty"`
	Tags        pq.StringArray `db:"tags" json:"tags"`
	Featured    bool           `db:"featured" json:"featured"`
	Status      string         `db:"status" json:"status"`
	PublishedAt *time.Time     `db:"published_at" json:"published_at,omitempty"`
	CreatedAt   time.Time      `db:"created_at" json:"created_at"`
}
