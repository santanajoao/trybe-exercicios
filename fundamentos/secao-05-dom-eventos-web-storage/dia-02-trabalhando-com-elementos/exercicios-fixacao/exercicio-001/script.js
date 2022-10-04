// Acesse o elemento elementoOndeVoceEsta.
const elemento = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele
const pai = elemento.parentElement
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
const primeiroFilhoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoFilho.innerHTML = 'Um texto';

// Acesse o primeiroFilho a partir de pai.
const primeiroFilhoE = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
const primeiroFilhoP = elemento.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elemento.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilhoE = elemento.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoP = pai.lastElementChild.previousElementSibling;