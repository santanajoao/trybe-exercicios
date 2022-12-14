const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// JPSC - Adiciona o eventListener em todos os li.
const allLi = document.getElementsByTagName('li');
for (const li of allLi) {
  li.addEventListener('click', becomeTech);
}

// JPSC - Adiciona a class "tech" no objeto clicado e remove dos outros
function becomeTech(object) {
  for (const li of allLi) {
    if (li === object.target) {
      li.className = 'tech';
    } else {
      li.className = li.className.replace('tech', ''); 
    }
  }
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', changeLiText);

function changeLiText() {
  const targetLi = document.querySelector('.tech');
  targetLi.innerText = input.value;
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', goToPortifolio);

function goToPortifolio() {
  window.location = 'https:santanajoao.github.io';
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', changeH3Color);
myWebpage.addEventListener('mouseleave', initialH3Color)

function changeH3Color() {
  myWebpage.style.color = 'orange';
}

function initialH3Color() {
  myWebpage.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Aqui está uma das tecnologias que mais gostei.';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
for (li of allLi) {
  li.addEventListener('dblclick', resetText);
}

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.