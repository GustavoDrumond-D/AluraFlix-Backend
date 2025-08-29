import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Projeto: AluraFlix");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando em http://localhost:${PORT}`);
});