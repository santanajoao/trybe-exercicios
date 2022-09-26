const moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Acesse as chaves do último morador e imprima no seguinte formato
// “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
const blocoDois = moradores.blocoDois
const ultimoMorador = blocoDois[blocoDois.length-1]
const nomeCompleto = ultimoMorador.nome + ' ' + ultimoMorador.sobrenome;

console.log(
  'O morador do bloco 2 de nome', nomeCompleto, 'mora no',
  ultimoMorador.andar + '° andar, apartamento', ultimoMorador.apartamento
);


// Utilize o for para imprimir o nome completo de todos os moradores
for (let bloco in moradores) {
  for (let morador of moradores[bloco]) {
    console.log(morador.nome, morador.sobrenome);
  }
}
