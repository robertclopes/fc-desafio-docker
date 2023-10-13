FROM golang:1.21-alpine
WORKDIR /usr/src/app
COPY desafio.go ./
COPY . .
RUN go build -v -o /usr/local/bin/app ./...
CMD ["app"]