import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const generatePasswordBtnEl = document.querySelector('button');
const passwordTitleDisplayEl = document.querySelector('h2');
generatePasswordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  passwordTitleDisplayEl.textContent = randomPassword;
});

passwordTitleDisplayEl.addEventListener('click', () => {
  copy(passwordTitleDisplayEl.textContent);
  alert('Senha copiada para a área de transferência!');
});
