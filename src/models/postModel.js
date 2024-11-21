import conectarAoBanco from "../config/dbconfig.js"
// Estabelece a conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona que retorna todos os posts de uma coleção específica do banco de dados.
export default async function getTodosPosts() {
  // 1. Obtém o banco de dados "imersao-alura" a partir da conexão estabelecida.
  const db = conexao.db("imersao-alura");
  // 2. Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // 3. Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
   return colecao.find().toArray();
};