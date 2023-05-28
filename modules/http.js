const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }
  if (req.url == "/users") {
    const users = [
      {
        name: "santiago",
        email: "santiago@gmail.com",
      },
      {
        name: "rayssa",
        email: "rayssa@gmail.com",
      },
      {
        name: "antonio",
        email: "antonio@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Server rodando na porta ${port}`));
