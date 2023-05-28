// Importando o módulo dotenv para carregar variáveis de ambiente
const dotenv = require("dotenv");
// Importando a função connectDatabase responsável por conectar ao banco de dados
const connectDatabase = require("./src/database/connect");

// Carregando as variáveis de ambiente a partir do arquivo .env
dotenv.config();

// Conectando ao banco de dados
connectDatabase();

// Importando e executando o módulo Express
require("./modules/express");
