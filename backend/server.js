// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock de dados de cardápio
const cardapio = [
{ id: 1, nome: 'Hambúrguer', preco: 15.00 },
{ id: 2, nome: 'Pizza', preco: 30.00 },
{ id: 3, nome: 'Refrigerante', preco: 5.00 },
];

// Rota para obter o cardápio
app.get('/api/cardapio', (req, res) => {
res.json(cardapio);
});

// Rota para fazer pedidos
app.post('/api/pedidos', (req, res) => {
const pedido = req.body; // Os detalhes do pedido vêm no corpo da requisição
console.log('Pedido recebido:', pedido);
res.status(201).send('Pedido recebido com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});
