# API-CRUD

Este é um projeto de API desenvolvido com Nest.js, utilizando DTOs (Data Transfer Objects) para manipulação de dados e Prisma como ORM (Object-Relational Mapping) para interagir com o banco de dados.

## Pré-requisitos

Certifique-se de ter instalado na sua máquina:

- Node.js (v18 ou superior)
- npm
- essa api usa o mysql mas você pode usar outro banco de dados suportado pelo Prisma.

## Instalação

1. Clone este repositório:
2. Instale as dependências:

```bash
$ npm install
```

## Rodar a api com os seguintes comandos:

```bash
# development
$ npm run dev

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testar aplicação digite os seguintes comandos no terminal:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Configuração do Banco de Dados

Esta API utiliza o Prisma como ORM para interagir com o banco de dados. Antes de iniciar a aplicação, certifique-se de configurar o arquivo .env na raiz do projeto com as credenciais do seu banco de dados. Um exemplo do arquivo .env pode ser encontrado abaixo:

DB_URL=postgresql://username:password@localhost:5432/database_name

Após fazer qualquer alteração no banco de dados lembre de rodar o seguinte comandos:

```bash
$ yarn prisma generate
$ npx prisma generate
```
