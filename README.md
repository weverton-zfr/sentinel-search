# Sentinel Search

Sentinel Search é uma aplicação web full stack em desenvolvimento, construída com foco em aprendizado e prática de backend profissional, autenticação, banco de dados, organização de código e integração com frontend.

O projeto possui um backend em Node.js + TypeScript e um frontend em React + TypeScript.

---

## Tecnologias utilizadas

### Backend

* Node.js
* TypeScript
* Express
* CORS
* dotenv
* Prisma ORM
* PostgreSQL
* bcrypt
* JSON Web Token
* tsx

### Frontend

* React
* TypeScript
* Vite
* Axios
* CSS Modules

---

## Estrutura do projeto

```bash
Sentinel Search/
├── server/
│   ├── config/
│   ├── generated/
│   ├── modules/
│   ├── prisma/
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── front/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

* Node.js
* npm
* PostgreSQL
* Git

Também é recomendado ter instalado:

* PGAdmin
* VS Code
* Extensão Prisma no VS Code

---

## Como clonar o projeto

```bash
git clone URL_DO_REPOSITORIO
```

Depois entre na pasta do projeto:

```bash
cd "Sentinel Search"
```

---

# Configuração do Backend

Entre na pasta do backend:

```bash
cd server
```

Instale as dependências:

```bash
npm install
```

---

## Dependências principais do backend

Caso seja necessário instalar manualmente, use:

```bash
npm install express cors dotenv bcrypt jsonwebtoken pg @prisma/client @prisma/adapter-pg
```

Dependências de desenvolvimento:

```bash
npm install typescript tsx prisma @types/node @types/express @types/cors @types/bcrypt @types/jsonwebtoken @types/pg --save-dev
```

---

## Variáveis de ambiente do backend

Crie um arquivo `.env` dentro da pasta `server`:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/SentinelDB?schema=public"
JWT_SECRET="sua_chave_secreta"
JWT_EXPIRES_IN="1d"
PORT=3333
```

Exemplo:

```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/SentinelDB?schema=public"
JWT_SECRET="sentinel_search_secret"
JWT_EXPIRES_IN="1d"
PORT=3333
```

Importante: o arquivo `.env` não deve ser enviado para o GitHub.

---

## Configuração do Prisma

Depois de configurar o `.env`, gere o Prisma Client:

```bash
npx prisma generate
```

Para criar as tabelas no banco com base no `schema.prisma`, rode:

```bash
npx prisma migrate dev
```

Caso seja a primeira migration do projeto:

```bash
npx prisma migrate dev --name init
```

Para abrir o Prisma Studio e visualizar os dados do banco:

```bash
npx prisma studio
```

---

## Rodar o backend

Dentro da pasta `server`, execute:

```bash
npm run dev
```

O servidor deve iniciar em:

```bash
http://localhost:3333
```

Mensagem esperada no terminal:

```bash
Servidor rodando na porta 3333
```

---

# Configuração do Frontend

Abra outro terminal e entre na pasta do frontend:

```bash
cd front
```

Instale as dependências:

```bash
npm install
```

---

## Dependências principais do frontend

Caso seja necessário instalar manualmente, use:

```bash
npm install axios
```

---

## Rodar o frontend

Dentro da pasta `front`, execute:

```bash
npm run dev
```

O frontend geralmente inicia em:

```bash
http://localhost:5173
```

---

# Scripts principais

## Backend

```bash
npm run dev
```

Inicia o servidor backend em modo desenvolvimento.

```bash
npx prisma generate
```

Gera o Prisma Client.

```bash
npx prisma migrate dev
```

Executa as migrations no banco de dados.

```bash
npx prisma studio
```

Abre uma interface visual para visualizar e editar dados do banco.

---

## Frontend

```bash
npm run dev
```

Inicia o frontend em modo desenvolvimento.

```bash
npm run build
```

Gera a versão de produção do frontend.

```bash
npm run preview
```

Executa uma prévia local da build de produção.

---

# Funcionalidades atuais

* Cadastro de usuário
* Integração do formulário de cadastro com backend
* Criptografia de senha com bcrypt
* Salvamento de usuário no PostgreSQL
* Interface de register estilizada
* Interface de login estilizada
* Integração HTTP com Axios
* Organização inicial por módulos

---

# Fluxo atual de cadastro

```txt
Usuário preenche o formulário no frontend
↓
Frontend envia os dados com Axios
↓
Backend recebe a requisição na rota de register
↓
Controller valida os dados recebidos
↓
Service criptografa a senha com bcrypt
↓
Prisma salva o usuário no PostgreSQL
↓
Backend retorna resposta para o frontend
```

---

# Rotas atuais da API

## Cadastro de usuário

```http
POST /register
```

Body esperado:

```json
{
  "name": "Weverton",
  "email": "weverton@email.com",
  "password": "123456"
}
```

Resposta esperada:

```json
{
  "message": "Usuario criado com sucesso",
  "user": {
    "id": 1,
    "name": "Weverton",
    "email": "weverton@email.com"
  }
}
```

---

# Banco de dados

Banco utilizado:

```txt
PostgreSQL
```

Nome do banco:

```txt
SentinelDB
```

Model inicial:

```prisma
model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
  password String
}
```

---

# Boas práticas do projeto

* Não salvar senhas sem criptografia.
* Não retornar senha nas respostas da API.
* Não enviar `.env` para o GitHub.
* Separar responsabilidades entre controller e service.
* Usar DTOs para definir formatos de entrada e saída.
* Usar status HTTP corretos.
* Fazer commits pequenos e descritivos.

---

# Padrão de commits

Este projeto utiliza commits semânticos.

Exemplos:

```bash
feat(auth): implementa cadastro full stack
feat(auth): implementa login com jwt
chore(backend): configura prisma com postgresql
chore(frontend): instala axios
style(auth): estiliza telas de login e register
docs: atualiza instruções de instalação
```

Tipos comuns:

```txt
feat     nova funcionalidade
fix      correção de bug
docs     documentação
style    alteração visual ou formatação
refactor refatoração sem mudar comportamento
chore    configuração, dependências ou tarefas internas
test     testes
```

---

# Como rodar o projeto completo

Em um terminal:

```bash
cd server
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Em outro terminal:

```bash
cd front
npm install
npm run dev
```

Depois acesse:

```bash
http://localhost:5173
```

---

# Status do projeto

O Sentinel Search está em desenvolvimento.

Funcionalidades já iniciadas:

* Backend com TypeScript
* Prisma configurado com PostgreSQL
* Cadastro de usuário funcional
* Frontend integrado com Axios
* Telas de login e register estilizadas

Próximas etapas planejadas:

* Implementar login
* Gerar JWT no login
* Criar middleware de autenticação
* Proteger rotas privadas
* Melhorar tratamento de erros
* Adicionar validação com Zod
* Criar refresh token futuramente
* Criar testes automatizados
* Preparar deploy

---

# Autor

Desenvolvido por Weverton Pereira Ribeiro.

Projeto criado como parte da jornada de estudos para evolução como desenvolvedor web full stack, com foco principal em backend, TypeScript, autenticação e banco de dados.
