function createElementWClass(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function createElementWText(tagName, text) {
  const element = document.createElement(tagName);
  element.innerText = text;
  return element;
}

// Adicione a tag h1 com o texto Exercício - JavaScript DOM como
// filho da tag body
const h1 = createElementWText('h1', 'Exercício - JavaScript DOM');
document.body.appendChild(h1);

// Adicione a tag main com a classe main-content como filho da tag body
const main = createElementWClass('main', 'main-content');
document.body.appendChild(main);

// Adicione a tag section com a classe center-content como
// filho da tag main
const sectionA = createElementWClass('section', 'center-content');
main.appendChild(sectionA);

// Adicione a tag p como filho do section criado no passo 3 e
// coloque algum texto
const p = createElementWText('p', 'Texto muito bonito')
sectionA.appendChild(p);

// Adicione a tag section com a classe left-content como filho da
// tag main criada no passo 2;
const sectionB = createElementWClass('section', 'letf-content');
main.appendChild(sectionB);

// Adicione a tag section com a classe right-content como filho da
// tag main criada no passo 2
const sectionC = createElementWClass('section', 'right-content');
main.appendChild(sectionC);

// Adicione uma imagem com src configurado para o valor
// https://picsum.photos/200 e classe small-image. Esse
// elemento deve ser filho do section criado no passo 5
const img = createElementWClass('img', 'small-image');
img.src = 'https://picsum.photos/200';
sectionB.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso,
// ou seja, um, dois, três, … como valores da lista. Essa lista deve ser 
// filha do section criado no passo 6
const numeros = [
  'um', 'dois', 'três', 'quatro', 'cinco',
  'seis', 'sete', 'oito', 'nove', 'dez',
];

const ul = document.createElement('ul');
for (numero of numeros) {
  const li = createElementWText('li', numero)
  ul.appendChild(li);
}

sectionC.appendChild(ul);

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  const texto = numeros[index];

  const h3 = createElementWText('h3', texto)
  main.appendChild(h3);
}

// Adicione a classe title na tag h1 criada
h1.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas
const listOfH3 = document.getElementsByTagName('h3');
for (h3 of listOfH3) {
  h3.className = 'decription';
}

// Remova a section criado no passo 5 (aquele que possui a
// classe left-content). Utilize a função .removeChild()
main.removeChild(sectionB);

// Centralize a section criado no passo 6 (aquele que possui a classe
// right-content). Dica: para centralizar, basta configurar o
// margin-right: auto da section
sectionC.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3
main.style.backgroundColor = 'green';

// Remova os dois últimos elementos nove e dez da lista criada no passo 8
for (let index = 0; index < 2; index += 1) {
  const ultimoItem = ul.lastElementChild;
  ultimoItem.remove();
}