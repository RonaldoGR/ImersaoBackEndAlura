import express from "express";

const app = express();

// porta 3000 fixa específica utilizada para servidor local
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersão!");
});