const http = require('http');

http.createServer((req, res) => {
  const agora = new Date().toLocaleString('pt-BR');
  res.end(`Data e hora atual: ${agora}`);
}).listen(3000);
