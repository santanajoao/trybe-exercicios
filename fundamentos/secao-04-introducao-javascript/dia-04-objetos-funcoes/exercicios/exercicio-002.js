let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Acesse as propriedades do objeto e faça um console.log no seguinte formato:
// “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’
console.log('O livro favorito de', leitor.nome, leitor.sobrenome,
'se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// Adicione um novo livro favorito na chave livrosFavoritos
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
);

// Faça um console.log no seguinte formato:
// “Julia tem <quantidade> livros favoritos”
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length,
'livros favoritos');