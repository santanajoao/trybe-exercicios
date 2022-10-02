// Global variables
const fridays = [4, 11, 18, 25];
const buttonsParent = document.querySelector('.buttons-container');
const tasksParent = document.querySelector('.my-tasks')

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
    dayLI.addEventListener('mouseover', zoomOnHover);
    dayLI.addEventListener('mouseleave', zoomOnHover);
  
    parentUl.appendChild(dayLI);
  }
}

// 2 - Crie um botão com o nome Feriados
function createHolidayButton(text) {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = 'btn-holiday';
  button.addEventListener('click', changeHolidaysBgColorOnClick);
  buttonsParent.appendChild(button);
}

// 3 - 
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

// 4 - 
function createFridayButton(text) {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = 'btn-friday';
  button.addEventListener('click', changeFridaysTextOnClick);
  buttonsParent.appendChild(button);
}

// 5 - 
function changeFridaysTextOnClick() {
  const fridayMessage = 'Sextou';
  const fridayElements = document.getElementsByClassName('friday');

  for (let index = 0; index < fridays.length; index += 1) {
    const friday = fridayElements[index];

    if (friday.innerText !== fridayMessage) {
      friday.innerText = fridayMessage;
    } else {
      friday.innerText = fridays[index];
    }
  }
}

// 6 -
function zoomOnHover(object) {
  const day = object.target
  if (day.style.fontSize !== '24px') {
    day.style.fontSize = '24px';
    day.style.fontWeight = 600;
  } else {
    day.style.fontSize = '20px';
    day.style.fontWeight = 400;
  }
}

// 7 -
function addTask(task) {
  const spanTask = document.createElement('span');

  spanTask.innerText = task;
  tasksParent.appendChild(spanTask);
}

// 8 -
function addTaskLabel(color) {
  const labelDiv = document.createElement('div');

  labelDiv.style.backgroundColor = color;
  labelDiv.className = 'task';
  labelDiv.addEventListener('click', selectTask);
  tasksParent.appendChild(labelDiv);
}

// 9 -
function selectTask(object) {
  const selectedClass = ' selected';
  const selectedTask = object.target;
  const allTasks = document.getElementsByClassName('task');

  for (const task of allTasks) {
    if (task === selectedTask && !task.className.includes(selectedClass)) {
      task.className += selectedClass;
    } else {
      task.className = task.className.replace(selectedClass, '');
    }
  }
}

// Functions calling and code
createDaysOfTheWeek();
createDaysOfTheMonth();

createHolidayButton('Feriados');

createFridayButton('Sexta-feira');

addTask('Projeto');
addTaskLabel('green');