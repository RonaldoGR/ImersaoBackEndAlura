import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js"

// Se estiver usando Windows precisa dessa configuração para arquivos
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// })

// const upload = multer({ dest: "./uploads", storage });
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
   // Permite que o servidor interprete requisições com corpo no formato JSON
  app.use(express.json());
  // Rota para buscar todos os posts
  app.get("/posts", listarPosts);
  // Rota para criar um post
  app.post("/posts", postarNovoPost);
  // Rota para enviar uma imagem para o bd
  app.post("/upload", upload.single("imagem"), uploadImagem);
 
};

export default routes;




