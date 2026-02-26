// Servidor Node.js para servir arquivos estáticos na porta 5001
const express = require('express');
const path = require('path');

const app = express();
const DEFAULT_PORT = 5001;
const initialPort = Number(process.env.PORT) || DEFAULT_PORT;

app.use(express.static(path.join(__dirname)));

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Porta ${port} em uso. Tentando porta ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    throw error;
  });
}

startServer(initialPort);
