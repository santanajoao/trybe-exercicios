const header = document.getElementById('header-container');
const body = document.getElementById('container');
const footer = document.getElementById('footer-container');

const emergencyDivs = document.querySelectorAll('.emergency-tasks div');
const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');

const noEmergencyDivs = document.querySelectorAll('.no-emergency-tasks div');
const noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');

function pintaFundo(arrayElementos, color) {
  for (const elemento of arrayElementos) {
    elemento.style.backgroundColor = color;
  }
}

header.style.backgroundColor = '#00B069';
body.style.backgroundColor = '#F3F3F3';
footer.style.backgroundColor = '#003533';

pintaFundo(emergencyDivs, '#FF9F84');
pintaFundo(noEmergencyDivs, '#F9DB5E');
pintaFundo(emergencyTitles, '#A500F3')
pintaFundo(noEmergencyTitles, 'black')