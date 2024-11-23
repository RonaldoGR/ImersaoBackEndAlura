import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js"
// Estabelece a conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);



// Função assíncrona que retorna todos os posts de uma coleção específica do banco de dados.
export  async function getTodosPosts() {
  // 1. Obtém o banco de dados "imersao-alura" a partir da conexão estabelecida.
  const db = conexao.db("imersao-alura");
  // 2. Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // 3. Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
   return colecao.find().toArray();
};

export async function criarPost(novoPost) { // Exporta uma função assíncrona para criar um novo post
  const db = conexao.db("imersao-alura"); // Conecta ao banco de dados "imersao-alura"
  const colecao = db.collection("posts"); // Seleciona a coleção "posts"
  return colecao.insertOne(novoPost); // Insere um novo documento (post) na coleção
}

export async function atualizarPost(id, novoPost) { 
  const db = conexao.db("imersao-alura"); 
  const colecao = db.collection("posts"); 
  const objectID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objectID) },{$set:novoPost}); 
}



