window.onload = () => {
  const button = document.querySelector('#click-button');

  button.addEventListener('click', () => {
    const counter = document.querySelector('#counter');
    counter.innerText = parseInt(counter.innerText) + 1;
  })
}
