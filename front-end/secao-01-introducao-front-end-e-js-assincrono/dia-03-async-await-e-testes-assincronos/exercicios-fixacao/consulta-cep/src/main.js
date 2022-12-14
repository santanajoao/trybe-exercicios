import Swal from 'sweetalert2';
import './style.css';

const inputCEPEl = document.querySelector('input');
const searchBtnEl = document.querySelector('button');
const displayULEl = document.querySelector('ul');

const fetchCEPAPI = async (endpoint) => {
  const API_PATH = `https://viacep.com.br/ws/${endpoint}/json/`;
  const response = await fetch(API_PATH);
  const data = await response.json();
  return data;
};

const throwSweetError = (message) => {
  Swal.fire({ icon: 'error', title: message });
};

const createLiEntriesArray = ([key, value]) => {
  const li = document.createElement('li');
  if (value !== '') {
    li.textContent = `${key.toUpperCase()}: ${value}`;
    displayULEl.appendChild(li);
  }
};

const renderCEPData = (data) => {
  displayULEl.textContent = '';
  const dataArray = Object.entries(data);
  dataArray.forEach(createLiEntriesArray);
};

searchBtnEl.addEventListener('click', async () => {
  try {
    const endpoint = inputCEPEl.value;
    const data = await fetchCEPAPI(endpoint);
    if ('erro' in data) {
      throwSweetError('CEP inexistente!');
    } else {
      renderCEPData(data);
    }
  } catch (error) {
    throwSweetError('O texto digitado não é um CEP!');
  } finally {
    inputCEPEl.value = '';
  }
});
