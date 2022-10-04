const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// recupere o elemento que contém o título da página e 
// altere para o nome de um filme
const title = document.getElementById('page-title');
title.innerHTML = 'Interestelar';

// recupere e altere o segundo parágrafo
const secondPStyle = document.getElementById('second-paragraph').style;
secondPStyle['background-color'] = 'red';
secondPStyle.color = 'yellow';
secondPStyle['font-style'] = 'italic';
secondPStyle['font-weight'] = '700';
secondPStyle.padding = '5px';
secondPStyle['text-align'] = 'center';

// recupere e altere o subtítulo
const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'Parágrafos bonitos';
subtitle.style.fontFamily = 'Arial';