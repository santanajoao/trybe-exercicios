import './style.css';

const heroImgEl = document.querySelector('#hero-img');
const heroNameH2El = document.querySelector('#hero-name');
const drawnHeroBtnEl = document.querySelector('.draw-btn');

// Retorna um número entre 1 e 731 que representa um id
const getRandomId = () => Math.floor(Math.random() * 731) + 1;

const fetchAndRender = () => {
  const id = getRandomId();
  const URL = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
  fetch(URL)
    .then((response) => response.json())
    .catch(() => fetchAndRender())
    .then(({ images, name }) => {
      heroImgEl.src = images.sm;
      heroImgEl.style.display = 'inline';
      heroNameH2El.textContent = name;
    });
};

drawnHeroBtnEl.addEventListener('click', fetchAndRender);
