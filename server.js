// server.js

// 1. Importar a biblioteca dotenv para carregar as variáveis do .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// 2. Criar uma instância do aplicativo Express
const app = express();

// 3. Acessar variáveis do .env
const port = process.env.PORT || 3000;  // Porta padrão é 3000
const dbURL = process.env.DB_URL;        // URL do banco de dados
const jwtSecret = process.env.JWT_SECRET; // Chave secreta para autenticação

// 4. Conectar ao MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB')) // Mensagem de sucesso
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err)); // Tratamento de erro de conexão

// 5. Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); // Mensagem de confirmação
});
