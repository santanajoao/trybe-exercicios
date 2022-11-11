import './style.css';

const inputCEPEl = document.querySelector('input');
const searchBtnEl = document.querySelector('button');
const displayParagraphEl = document.querySelector('p');

searchBtnEl.addEventListener('click', async () => {
  try {
    const endpoint = inputCEPEl.value;
    const API_PATH = `https://viacep.com.br/ws/${endpoint}/json/`;
    const response = await fetch(API_PATH);
    const data = await response.json();
    displayParagraphEl.innerText = data;
    console.log(data);
  } catch (error) {
    console.log(error);
    displayParagraphEl.innerText = error.message;
  }
});
