const myClass = 'madeByMe'

// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const elementoSimbling = document.createElement('section');

elementoSimbling.className = myClass;
pai.appendChild(elementoSimbling);

// Crie um filho para elementoOndeVoceEsta.
const elemento = document.getElementById('elementoOndeVoceEsta');
const elementoChild = document.createElement('section');

elementoChild.className = myClass;
elemento.appendChild(elementoChild); 

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroFilhoDoFilhoChild = document.createElement('section');

primeiroFilhoDoFilhoChild.className = myClass;
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoChild);

// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = primeiroFilhoDoFilhoChild.parentElement.parentElement.nextElementSibling;