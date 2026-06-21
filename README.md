# Sentinel Search

Sentinel Search é uma aplicação web em desenvolvimento com foco em consultas, organização de dados e estrutura backend profissional.

O projeto está sendo construído com o objetivo de praticar e consolidar fundamentos reais de backend, arquitetura, banco de dados, autenticação, autorização, segurança, validações, testes e deploy.

---

## Objetivo do Projeto

O objetivo do Sentinel Search é criar uma aplicação robusta, organizada e escalável, utilizando boas práticas de desenvolvimento backend com TypeScript.

Este projeto também serve como base de estudo prático para evolução profissional como desenvolvedor web full stack, com foco principal inicial no backend.

---

## Status Atual

Projeto em fase inicial de desenvolvimento.

### Já iniciado

- Configuração inicial do servidor Node.js
- Uso de Express
- Uso de TypeScript
- Configuração de variáveis de ambiente com dotenv
- Estrutura inicial de rotas
- Controllers
- Services
- DTOs
- Fake database inicial
- Conexão planejada com PostgreSQL
- Banco `SentinelDB` criado no PostgreSQL

### Em desenvolvimento

- Integração real com PostgreSQL
- Criação de usuários via `POST /user`
- Validações de entrada
- Tratamento profissional de erros
- Organização final de pastas
- Padronização de respostas HTTP

---

## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- TypeScript
- dotenv
- cors
- ts-node-dev
- PostgreSQL
- PGAdmin

### Futuras tecnologias planejadas

- Prisma
- Zod
- bcrypt
- JWT
- Helmet
- Rate Limit
- Docker
- Testes automatizados
- Deploy em VPS

---

## Estrutura Inicial do Projeto

Estrutura base planejada para o backend:

```bash
server/
├── src/
│   ├── config/
│   │   └── database.ts
│   │
│   ├── modules/
│   │   └── users/
│   │       ├── user.routes.ts
│   │       ├── user.controller.ts
│   │       ├── user.service.ts
│   │       ├── user.dto.ts
│   │       └── user.data.ts
│   │
│   ├── shared/
│   │   ├── middlewares/
│   │   ├── errors/
│   │   └── utils/
│   │
│   └── app.ts
│
├── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md