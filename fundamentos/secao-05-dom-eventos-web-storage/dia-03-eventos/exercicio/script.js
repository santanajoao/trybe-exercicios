// Global variables

// Fuctions

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

// 1 - Adicione os dias do mês no calendário
function createDaysOfTheMonth() {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const fridays = [4, 11, 18, 25];
  const holidays = [24, 25, 31];
  const parentUl = document.getElementById('days');

  for (const day of decemberDaysList) {
    const dayLI = document.createElement('li');

    dayLI.innerText = day;
    dayLI.className = 'day';
    if (fridays.includes(day)) {
      dayLI.className += ' friday';
    }
    if (holidays.includes(day)) {
      dayLI.className += ' holiday';
    }

    parentUl.appendChild(dayLI);
  }
}

// Crie um botão com o nome Feriados
function createHolidaysButton(text) {
  const parentDiv = document.querySelector('.buttons-container');
  const button = document.createElement('button');

  button.innerText = text;
  button.id = 'btn-holiday';
  parentDiv.appendChild(button);
}

function changeHolidaysBgColorOnClick() {
  const holidayElements = document.getElementsByClassName('holiday');
  for (holiday of holidayElements) {
    if (holiday.style.backgroundColor !== 'lightgreen') {
      holiday.style.backgroundColor = 'lightgreen';
    } else {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

// Functions calling and code

createDaysOfTheWeek();
createDaysOfTheMonth();
createHolidaysButton('Feriados');

const button = document.getElementById('btn-holiday');
button.addEventListener('click', changeHolidaysBgColorOnClick);