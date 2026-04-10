package database

import (
	"context"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

// InitDB initializes and returns a database connection pool
func InitDB(connectionString string) (*pgxpool.Pool, error) {
	ctx := context.Background()
	ctx, _ = context.WithTimeout(ctx, 10000*time.Millisecond)

	// Create a connection pool
	pool, err := pgxpool.New(ctx, connectionString)
	if err != nil {
		return nil, fmt.Errorf("failed to create connection pool: %w", err)
	}

	// Ping to verify connection
	if err := pool.Ping(ctx); err != nil {
		pool.Close()
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	fmt.Println("DB Initialized Successfully! ✅")
	return pool, nil
}
