const http = require('http');
const inicio = Date.now();

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <body>
        <h1>Tempo de atividade:</h1>
        <div id="tempo"></div>
        <script>
          setInterval(() => {
            const segundos = Math.floor((Date.now() - ${inicio}) / 1000);
            const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
            const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
            const s = String(segundos % 60).padStart(2, '0');
            document.getElementById('tempo').textContent = h + ':' + m + ':' + s;
          }, 1000);
        </script>
      </body>
    </html>
  `);
}).listen(3004);
