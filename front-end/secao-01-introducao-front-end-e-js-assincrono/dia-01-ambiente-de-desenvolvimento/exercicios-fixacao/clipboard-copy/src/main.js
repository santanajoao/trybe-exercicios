import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const generatePasswordBtnEl = document.querySelector('button');
const passwordTitleDisplayEl = document.querySelector('h2');
const messageParagraphEl = document.querySelector('p');

const renderCopyMessage = () => {
  messageParagraphEl.textContent = 'Senha copiada para a área de transferência!';
  setTimeout(() => {
    messageParagraphEl.textContent = '';
  }, 2000);
};

generatePasswordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  passwordTitleDisplayEl.textContent = randomPassword;
});

passwordTitleDisplayEl.addEventListener('click', () => {
  copy(passwordTitleDisplayEl.textContent);
  renderCopyMessage();
});
