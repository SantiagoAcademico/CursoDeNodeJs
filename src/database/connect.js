const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.rxmemix.mongodb.net/database?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao banco de dados!");
    // Resto do seu código após a conexão ser estabelecida
  } catch (error) {
    return console.error("Erro ao conectar ao banco de dados:", error);
  }
};
module.exports = connectToDatabase;
