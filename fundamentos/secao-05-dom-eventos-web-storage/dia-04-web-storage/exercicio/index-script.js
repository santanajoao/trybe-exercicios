const propertys = [
  'background-color', 'color', 'font-size', 'line-height', 'font-family'
];

function renderizeChanges() {
  for (const property of propertys) {
    const value = localStorage.getItem(property);
    document.body.style[property] = value;
  }
}

window.onload = renderizeChanges();