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
  const parentUL = document.getElementById('days');

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
    dayLI.addEventListener('click', markDayOfMonth);
  
    parentUL.appendChild(dayLI);
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

// 3 - Crie uma função que mude a cor de fundo dos feriados ao clicar no botão
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

// 4 - Crie um botão com o nome Sexta-feira
function createFridayButton(text) {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = 'btn-friday';
  button.addEventListener('click', changeFridaysTextOnClick);
  buttonsParent.appendChild(button);
}

// 5 - Crie uma função que altera o texto das sextas ao clicar no botão
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

// 6 - Crie uma função que crie um efeito de zoom ao passar o mouse
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

// 7 - Crie uma função que adicione uma tarefa e receba como parâmetro
function addTask(task) {
  const spanTask = document.createElement('span');

  spanTask.innerText = task;
  tasksParent.appendChild(spanTask);
}

// 8 - Crie uma função que adicione uma legenda a tarefa
function addTaskLabel(color) {
  const labelDiv = document.createElement('div');

  labelDiv.style.backgroundColor = color;
  labelDiv.className = 'task';
  labelDiv.addEventListener('click', selectTask);
  tasksParent.appendChild(labelDiv);
}

// 9 - Crie uma função que selecione uma tarefa
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

// 10 - Crie uma função que atribua a cor da tarefa a um dia do calendário
function markDayOfMonth(object) {
  const color = document.querySelector('.selected').style.backgroundColor;
  const clickedDay = object.target;
  if (clickedDay.style.color !== color) {
    clickedDay.style.color = color;
  } else {
    clickedDay.style.color = 'rgb(119,119,119)';
  }
}

// Bônus - Crie uma função que adicione compromissos ao clicar no botão ou
// apertar enter

function addCompromisso(object) {
  const validKeys = [undefined, 'Enter'];
  const parentUL = document.querySelector('.task-list');
  const task = document.getElementById('task-input');
  const taskLI = document.createElement('li');

  if (validKeys.includes(object.key)) {
    if (task.value === '') {
      window.alert('Campo vazio! Escreva seu compromisso para adicionar.')
    } else {
      taskLI.innerText = task.value;
      parentUL.appendChild(taskLI);
      task.value = '';
    }
  }
}

function addCompromissoEventListener() {
  const input = document.getElementById('task-input');
  const button = document.getElementById('btn-add');

  input.addEventListener('keydown', addCompromisso)
  button.addEventListener('click', addCompromisso);
}

// Functions calling and code
createDaysOfTheWeek();
createDaysOfTheMonth();

createHolidayButton('Feriados');

createFridayButton('Sexta-feira');

addTask('Projeto');
addTaskLabel('green');

addCompromissoEventListener();