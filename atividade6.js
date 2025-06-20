const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <body>
        <h1>Data e hora atual:</h1>
        <div id="datahora"></div>
        <script>
          function atualizar() {
            const agora = new Date();
            const formatada = agora.toLocaleString('pt-BR');
            document.getElementById('datahora').textContent = formatada;
          }
          atualizar();
          setInterval(atualizar, 1000);
        </script>
      </body>
    </html>
  `);
}).listen(3005);
