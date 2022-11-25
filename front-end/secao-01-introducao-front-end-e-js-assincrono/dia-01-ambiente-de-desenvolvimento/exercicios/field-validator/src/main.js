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

const displayResult = (result, sucessMessage, failMessage, ) => {
  if (result) {
    messageParagraphEl.innerText = sucessMessage;
    messageParagraphEl.className = 'success';
  } else {
    messageParagraphEl.innerText = failMessage;
    messageParagraphEl.className = 'fail';
  }
}

const validateStrongPassword = (password) => {
  const score = isStrongPassword(password, { returnScore: true });
  displayResult(
    isStrongPassword(password),
    `Sua senha é forte!\nPontuação: ${score}`,
    `Sua senha é fraca!\nPontuação: ${score}`,
  );
};

const validateEmail = (email) => {
  displayResult(isEmail(email), 'Email válido!', 'Email inválido!');
};

const validateCreditCard = (card) => {
  displayResult(
    isCreditCard(card),
    'Cartão de crédito válido!',
    'Cartão de crédito inválido!',
  );
};

const validateDate = (date) => {
  displayResult(
    isDate(date, 'DD/MM/YYYY'),
    'Data válida!',
    'Data inválida!\nA data deve ser no padrão DD/MM/YYYY ou DD-MM-YYYY',
  );
};

const validatePostalCode = (code) => {
  displayResult(
    isPostalCode(code, 'BR'),
    'CEP válido!',
    'CEP inválido!\nÉ necessário adicionar os hífens "-"',
  );
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

selectValidationTypeEl.addEventListener('change', () => {
  if (selectValidationTypeEl.value === '') {
    validateButtonEl.className = 'disabled';
  } else {
    validateButtonEl.className = 'validation-btn';
    validateButtonEl.disabled = false;
  }
});
