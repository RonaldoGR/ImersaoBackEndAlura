import express from "express";
import routes from "./src/routes/postRoutes.js";

// Cria uma instância do Express, que será o núcleo da nossa aplicação web.
const app = express();
routes(app);
// porta 3000 fixa específica utilizada para servidor local
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo as requisições.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});