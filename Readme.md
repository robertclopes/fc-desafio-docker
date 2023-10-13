# Desafio Docker FullCycle

## Desafio Go

### Build e publicação

```bash
docker build -t robertclopes/desafio-docker-go . -f .\Dockerfile.prod
docker push robertclopes/desafio-docker-go
```

### Download e execução

```bash
docker pull robertclopes/desafio-docker-go
docker run --rm -it robertclopes/desafio-docker-go
```

## Desafio Nginx com Node.js

### Build e execução

```bash
docker compose up -d
```
