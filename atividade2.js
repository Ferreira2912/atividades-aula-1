const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  const uptime = process.uptime().toFixed(0);
  const sistema = os.type().toLowerCase();
  const livre = (os.freemem() / 1024 / 1024).toFixed(0);
  const total = (os.totalmem() / 1024 / 1024).toFixed(0);

  res.end(`Servidor Node ativo há ${uptime} segundos.\nSistema Operacional: ${sistema}\nMemória: ${livre} MB livre de ${total} MB`);
}).listen(3001);
