# ─── Stage 1: Development ────────────────────────────────────
FROM golang:1.25-alpine AS dev
WORKDIR /app
RUN go install github.com/air-verse/air@latest
COPY go.mod go.sum ./
RUN go mod download
COPY . .
EXPOSE 8080
CMD ["air"]

# ─── Stage 2: Builder ────────────────────────────────────────
FROM golang:1.25-alpine AS builder
WORKDIR /app
RUN apk add --no-cache ca-certificates
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod go mod download
COPY . .
RUN --mount=type=cache,target=/root/.cache/go-build \
    CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /server .

# ─── Stage 3: Production ─────────────────────────────────────
FROM scratch AS prod
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /server /server
EXPOSE 8080
ENTRYPOINT ["/server"]