const http = require('http');
let acessos = 0;

http.createServer((req, res) => {
  acessos++;
  res.end(`Este servidor já foi acessado ${acessos} vezes.`);
}).listen(3003);
