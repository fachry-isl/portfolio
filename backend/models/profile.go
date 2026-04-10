package models

import (
	"encoding/json"
	"time"

	"github.com/google/uuid"
)

type Profile struct {
	ID          uuid.UUID       `db:"id" json:"id"`
	DisplayName string          `db:"display_name" json:"display_name"`
	Bio         *string         `db:"bio" json:"bio,omitempty"`
	AvatarURL   *string         `db:"avatar_url" json:"avatar_url,omitempty"`
	Links       json.RawMessage `db:"links" json:"links"`
	UpdatedAt   time.Time       `db:"updated_at" json:"updated_at"`
}
