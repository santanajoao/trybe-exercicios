const allInputs = document.getElementsByTagName('input');
const propertys = [
  'background-color', 'color', 'font-size', 'line-height', 'font-family'
];

for (const input of allInputs) {
  input.addEventListener('click', addToLocalStorage);
}

function addToLocalStorage(object) {
  const target = object.target;
  const targetParent = target.parentNode;
  localStorage.setItem(targetParent.id, target.value);
  renderizeChanges();
}

function renderizeChanges() {
  for (const property of propertys) {
    const value = localStorage.getItem(property);
    document.body.style[property] = value;
  }
}

window.onload = renderizeChanges();