import isEmail from 'validator/lib/isEmail';
import isPostalCode from 'validator/lib/isPostalCode';
import isDate from 'validator/lib/isDate';
import isCreditCard from 'validator/lib/isCreditCard';
import isStrongPassword from 'validator/lib/isStrongPassword';
import './style.css';

const targetInputEl = document.querySelector('#validation-target');
const selectValidationTypeEl = document.querySelector('#select-validation');
const validateButtonEl = document.querySelector('button');
const messageParagraphEl = document.querySelector('#result-p');

const validateStrongPassword = (password) => {
  const isStrong = isStrongPassword(password);
  const score = isStrongPassword(password, { returnScore: true });
  const result = isStrong ? '' : 'não ';
  messageParagraphEl.innerText = `Sua senha ${result}é forte!\nPontuação: ${score}`;
};

const validateEmail = (email) => {
  const result = isEmail(email) ? 'válido' : 'inválido';
  messageParagraphEl.innerText = `Email ${result}!`;
};

const validateCreditCard = (card) => {
  const result = isCreditCard(card) ? 'válido' : 'inválido';
  messageParagraphEl.innerText = `Cartão de crédito ${result}!`;
};

const validateDate = (date) => {
  const result = isDate(date, { format: 'DD/MM/YYYY' }) ? 'válida' : 'inválida';
  messageParagraphEl.innerText = `Data ${result}!\n`;
  if (result === 'inválida') {
    messageParagraphEl.innerText
      += 'A data deve ser no padrão DD/MM/YYYY e separada por \'/\' ou \'-\'';
  }
};

const validatePostalCode = (code) => {
  const invalidMessage = 'inválido\nÉ necessário adicionar os hífens "-"'
  const result = isPostalCode(code, 'BR') ? 'válido' : invalidMessage;
  messageParagraphEl.innerText = `CEP ${result}`;
};

validateButtonEl.addEventListener('click', (event) => {
  event.preventDefault();
  const { value: validationTarget } = targetInputEl;
  const { value: validationType } = selectValidationTypeEl;
  const typeAndFunction = {
    'strong-password': () => validateStrongPassword(validationTarget),
    email: () => validateEmail(validationTarget),
    'credit-card': () => validateCreditCard(validationTarget),
    date: () => validateDate(validationTarget),
    'zip-code': () => validatePostalCode(validationTarget),
  };
  const validationFunction = typeAndFunction[validationType];
  validationFunction();
});

selectValidationTypeEl.addEventListener('change', (event) => {
  event.preventDefault();
  if (selectValidationTypeEl.value !== '') {
    validateButtonEl.classList.remove('disabled');
    validateButtonEl.classList.add('validation-btn');
  } else {
    validateButtonEl.classList.remove('validation-btn');
    validateButtonEl.classList.add('disabled');
  }
});
