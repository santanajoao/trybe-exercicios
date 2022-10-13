const submitButton = document.getElementById('submit-button');

function checkName() {
  const nameInput = document.getElementById('name-input');
  const nameLength = nameInput.value.length;
  return nameLength >= 10 && nameLength <= 40;
}

function checkEmail() {
  const emailInput = document.getElementById('email-input');
  const emailLength = emailInput.value.length;
  return emailLength >= 10 && emailLength <= 50;
}

function checkText() {
  const textInput = document.getElementById('text-input');
  const textLength = textInput.value.length;
  return textLength <= 500;
}

function checkImageRight() {
  const imageRightCheckBox = document.getElementById('checkbox-2');
  return imageRightCheckBox.checked;
}

function checkDate() {
  const actualDate = Date.now();
  const dateString = document.getElementById('date-input').value;
  const date = new Date(dateString);
  const maxDate = new Date('2022/12/31');
  return (date > actualDate) && (date < maxDate);  
}

submitButton.addEventListener('click', function(event) {
  if (checkName() && checkEmail() && checkText() && checkImageRight() 
  && checkDate()) {
    alert('Dados enviados com sucesso!');
  } else {
    event.preventDefault();
    alert('Dados Inválidos');
  }
});
