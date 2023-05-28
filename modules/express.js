const express = require("express");
const UserModel = require("../src/models/user.model");
app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// Rota para exibir uma página com todos os usuários
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

// Rota para exibir uma página inicial simples
app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Home Page</h1>");
});

// Rota para obter todos os usuários em formato JSON
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Rota para obter um usuário específico por ID em formato JSON
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota para atualizar um usuário existente por ID
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota para excluir um usuário existente por ID
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8000;

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
