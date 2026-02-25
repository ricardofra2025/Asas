// Servidor Node.js para servir arquivos estáticos na porta 5001
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
