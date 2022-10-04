const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// recupere os parágrafos utilizando get...ClassName
const paragraphs = document.getElementsByClassName('paragraphs');

// altere algum estilo do primeiro deles
paragraphs[0].style.color = 'gray';

// recupere e altere a cor do subtítulo utilizando get...TagName
const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'red';