const http = require('http');

const mensagens = [
  "Acredite no seu potencial!",
  "Você está no caminho certo!",
  "Não desista, o esforço vale a pena!",
  "Erros são lições disfarçadas.",
  "Programar é transformar ideias em realidade!"
];

http.createServer((req, res) => {
  const sorteada = mensagens[Math.floor(Math.random() * mensagens.length)];
  res.end(`Mensagem do dia:\n“${sorteada}”`);
}).listen(3002);
