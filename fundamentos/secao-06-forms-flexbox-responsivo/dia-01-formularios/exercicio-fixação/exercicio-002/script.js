const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(event) {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', function(event) {
  event.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', function(event) {
  event.preventDefault();
  if (event.key === 'a') {
    event.target.value += event.key;
  }
});
