import express from "express";

const posts = [
    { id: 1, descricao: "uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Uma paisagem incrível!", imagem: "https://source.unsplash.com/random/300x200" },
    { id: 3, descricao: "Uma paisagem incrível!", imagem: "https://source.unsplash.com/random/300x200"},
    {id: 4, descricao: "Meu novo cachorro!", imagem: "https://placeimg.com/300/200/animals",  },
    {id: 5,  descricao: "Receita de bolo de chocolate", imagem: "https://loremflickr.com/300/200/food"},
    {id: 6,descricao: "Um dia na praia", imagem: "https://picsum.photos/id/237/300/200", },
];

const app = express();

app.use(express.json()); // indicando que a aplicação usa essa funcionalidade de converter essa estrutura em json

// porta 3000 fixa específica utilizada para servidor local
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts); 
});


function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}; 


// :id vai ser substituído por um dado variável
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id)
  res.status(200).json(posts[index]); 
});


function buscarPorPalavra(keyword) {
  return posts.filter((post) => {
     return post.descricao.toLocaleLowerCase().includes(keyword);

  });
};

app.get("/posts/search/:keyword", (req, res) => {
  const keyword = req.params.keyword
  const resultados = buscarPorPalavra(keyword)
  res.status(200).json(resultados); 
});