import getTodosPosts from "../models/postModel.js";
 
// 1. Quando uma requisição GET é feita para o caminho /posts: 
export async function listarPosts (req, res)  {
  // - A função `getTodosPosts()` é chamada para obter todos os posts do banco de dados.
  const resultados = await getTodosPosts();
   // 2. O resultado da consulta é enviado como resposta ao cliente no formato JSON, com o status HTTP 200 (sucesso).
  res.status(200).json(resultados); 
}; 

