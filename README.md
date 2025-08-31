# AluraFlix - Backend

Este projeto é uma API REST desenvolvida em **Node.js** com **Express** e **MongoDB**, criada como parte do desafio da [Alura](https://www.alura.com.br/).  
O objetivo é fornecer um backend para a plataforma **AluraFlix**, que hospeda vídeos sobre tecnologia.

---

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) - v5.1.0
- [MongoDB](https://www.mongodb.com/) - v6.19.0
- [Mongoose](https://mongoosejs.com/) - v8.18.0

---

## 📌 Funcionalidades
- CRUD de vídeos (Criar, Listar, Atualizar e Deletar)
- Paginação de resultados

---

## 🛠 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/GustavoDrumond-D/AluraFlix-Backend.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd AluraFlix-Backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

---

## 📡 Endpoints Principais

* `POST /videos` → Criar vídeo
* `GET /videos` → Listar vídeos
* `GET /videos/:id` → Detalhar vídeo
* `PUT /videos/:id` → Atualizar vídeo
* `DELETE /videos/:id` → Deletar vídeo

