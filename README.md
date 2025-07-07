# Projet Express + MariaDB – Pipeline CI/CD

Ce dépôt contient une application Express minimaliste avec :
- Formulaire HTML
- Base MariaDB
- Tests unitaires (Jest) et E2E (Cypress)
- Pipeline GitHub Actions

## Prérequis
- Node.js 18+
- Docker

## Installation
```bash
npm i
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=testdb -p 3306:3306 -d mariadb
node fixtures/seed.js
npm start  # http://localhost:3000
```

## Tests
```bash
npm test          # Unitaires
npx cypress open  # E2E
```

## CI/CD
Push sur `main` ➜ GitHub Actions lance lint + unit + e2e (service MariaDB).
# CI-CD
