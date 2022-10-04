const sizeOptions = [14, 16, 18, 20, 22, 24, 26, 28];
const heightOptions = [24, 30, 36, 42, 48, 54];

function addSelectFontSizeOptions() {
  const fontSizeParents = document.getElementById('font-size-options');

  for (const size of sizeOptions) {
    const option = document.createElement('option');

    option.value = `${size}px`;
    option.innerText = size;
    fontSizeParents.appendChild(option);
  }
}

function addSelectHeightOptions() {
  const lineParents = document.getElementById('line-height-options');

  for (const height of heightOptions) {
    const option = document.createElement('option');

    option.value = `${height}px`;
    option.innerText = height;
    lineParents.appendChild(option);
  }
}

function addSelectFontsOptions() {
  const fontsParents = document.getElementById('font-family-options');
  const fonts = ['Arial', 'Times New Roman'];
  for (const font of fonts) {
    const option = document.createElement('option');
    option.value = font;
    option.innerText = font;

    fontsParents.appendChild(option);
  }
}

function addToLocalStorage(object) {
  const target = object.target;
  localStorage[target.name] = target.value;
  renderize();
}

function addConfigListener() {
  const inputs = document.getElementsByTagName('input');
  const selectors = document.getElementsByTagName('select');

  for (const input of inputs) {
    input.addEventListener('change', addToLocalStorage);
  }

  for (const selector of selectors) {
    selector.addEventListener('change', addToLocalStorage);
  }
}

function renderize() {
  for (const property in localStorage) {
    if (typeof localStorage[property] === 'string') {
      document.body.style[property] = localStorage[property];
    }
  }
}

addSelectFontSizeOptions();
addSelectHeightOptions();
addSelectFontsOptions();
addConfigListener();
renderize();