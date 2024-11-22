import {getTodosPosts, criarPost} from "../models/postModel.js";
import fs from "fs";
 
// 1. Quando uma requisição GET é feita para o caminho /posts: 
export async function listarPosts (req, res)  {
  // - A função `getTodosPosts()` é chamada para obter todos os posts do banco de dados.
  const resultados = await getTodosPosts();
   // 2. O resultado da consulta é enviado como resposta ao cliente no formato JSON, com o status HTTP 200 (sucesso).
  res.status(200).json(resultados); 
}; 



export async function postarNovoPost(req, res) { // Exporta uma função assíncrona para criar um novo post
  const novoPost = req.body; // Extrai os dados do novo post do corpo da requisição
  try { // Inicia um bloco try-catch para tratar possíveis erros
    const postCriado = await criarPost(novoPost); // Chama a função criarPost para inserir o post no banco de dados
    res.status(200).json(postCriado) // Retorna o post criado com status 200 (sucesso)
  } catch (error) { // Captura qualquer erro que ocorra
    console.error(error.message); // Imprime a mensagem de erro no console
    res.status(500).json({"Erro": "Falha na requisição"}); // Retorna um erro genérico com status 500
  }
}

export async function uploadImagem(req, res) { // Exporta uma função assíncrona para fazer upload de uma imagem e criar um post
  const novoPost = { // Cria um objeto com os dados básicos do novo post
    descricao: "",
    imgUrl: req.file.originalname, // Define a URL da imagem como o nome original do arquivo
    alt: ""
  };

  try { // Inicia um bloco try-catch para tratar possíveis erros
    const postCriado = await criarPost(novoPost); // Chama a função criarPost para inserir o post no banco de dados
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Cria um novo nome para a imagem
    fs.renameSync(req.file.path, imagemAtualizada); // Renomeia o arquivo da imagem para o novo nome
    res.status(200).json(postCriado); // Retorna o post criado com status 200 (sucesso)
  } catch (error) { // Captura qualquer erro que ocorra
    console.error(error.message); // Imprime a mensagem de erro no console
    res.status(500).json({"Erro": "Falha na requisição"}); // Retorna um erro genérico com status 500
  }
}