const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dados temporários para pedidos e cardápio
let pedidos = [];
let cardapio = [];

// Rotas para "pedidos"
app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.post('/pedidos', (req, res) => {
  const pedido = {
    id: pedidos.length + 1,
    item: req.body.item,
    quantidade: req.body.quantidade,
    status: 'Em andamento'
  };
  pedidos.push(pedido);
  res.status(201).json(pedido);
});

app.put('/pedidos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pedido = pedidos.find(p => p.id === id);

  if (!pedido) {
    return res.status(404).json({ message: 'Pedido não encontrado!' });
  }

  pedido.item = req.body.item || pedido.item;
  pedido.quantidade = req.body.quantidade || pedido.quantidade;
  pedido.status = req.body.status || pedido.status;

  res.json(pedido);
});

app.delete('/pedidos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = pedidos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Pedido não encontrado!' });
  }

  const pedidoRemovido = pedidos.splice(index, 1);
  res.json(pedidoRemovido);
});

// Rotas para "cardapio"
app.get('/cardapio', (req, res) => {
  res.json(cardapio);
});

app.post('/cardapio', (req, res) => {
  const itemCardapio = {
    id: cardapio.length + 1,
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao
  };
  cardapio.push(itemCardapio);
res.status(201).json(itemCardapio);
});

app.put('/cardapio/:id', (req, res) => {
const id = parseInt(req.params.id);
const item = cardapio.find(i => i.id === id);

if (!item) {
return res.status(404).json({ message: 'Item não encontrado!' });
}

item.nome = req.body.nome || item.nome;
item.preco = req.body.preco || item.preco;
item.descricao = req.body.descricao || item.descricao;

res.json(item);
});

app.delete('/cardapio/:id', (req, res) => {
const id = parseInt(req.params.id);
const index = cardapio.findIndex(i => i.id === id);

if (index === -1) {
    return res.status(404).json({ message: 'Item não encontrado!' });
}

const itemRemovido = cardapio.splice(index, 1);
res.json(itemRemovido);
});

// Iniciando o servidor
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});
