  /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function alteraParagrafos(novoCounteudo) {
  const paragrafos = document.getElementsByTagName('p');
  for (const paragrafo of paragrafos) {
    paragrafo.innerText = novoCounteudo;
  }
}

function alteraFundoClasse(classe, cor) {
  const elementos = document.getElementsByClassName(classe);
  for (const elemento of elementos) {
    elemento.style.backgroundColor = cor;
  }
}

function corrigeTitulo() {
  const titulo = document.getElementsByClassName('title')[0];
  titulo.innerText = 'Exercício - JavaScript';
}

function paragrafoMaiusculo() {
  const primeiroParagrafo =  document.getElementsByTagName('p')[0];
  primeiroParagrafo.innerText = primeiroParagrafo.innerText.toUpperCase();
}

function conteudoParagrafos() {
  const paragrafos = document.getElementsByTagName('p');
  for (const paragrafo of paragrafos) {
    console.log(paragrafo.innerText);
  }
}

alteraParagrafos('como eu me vejo daqui a dois anos');
alteraFundoClasse('main-content', 'rgb(76,164,109)');
alteraFundoClasse('center-content', 'white');
corrigeTitulo();
paragrafoMaiusculo();
conteudoParagrafos();
