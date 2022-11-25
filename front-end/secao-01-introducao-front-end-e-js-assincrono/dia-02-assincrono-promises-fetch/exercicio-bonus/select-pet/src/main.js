import './style.css';

const DOGS_API = 'https://dog.ceo/api/breeds/image/random';
const CATS_API = 'https://aws.random.cat/meow';

const dogBtnEl = document.querySelector('#random-dog-btn');
const catBtnEl = document.querySelector('#random-cat-btn');
const surpriseBtnEl = document.querySelector('#surprise-btn');
const petImgEl = document.querySelector('#pet-img');
const placeholderSpanEl = document.querySelector('.placeholder-text');

const fetchAPI = (URL) => fetch(URL).then((response) => response.json());

const renderImage = () => {
  petImgEl.style.display = 'inline';
  placeholderSpanEl.style.display = 'none';
};

dogBtnEl.addEventListener('click', () => {
  fetchAPI(DOGS_API).then(({ message }) => {
    petImgEl.src = message;
    renderImage();
  });
});

catBtnEl.addEventListener('click', () => {
  fetchAPI(CATS_API).then(({ file }) => {
    petImgEl.src = file;
    renderImage();
  });
});

surpriseBtnEl.addEventListener('click', () => {
  const URLS = [CATS_API, DOGS_API];
  const index = Math.round(Math.random());
  const randomURL = URLS[index];
  fetchAPI(randomURL)
    .then((data) => {
      if ('file' in data) {
        petImgEl.src = data.file;
      } else {
        petImgEl.src = data.message;
      }
    });
});
