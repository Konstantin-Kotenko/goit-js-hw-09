function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalColor;
refs.stop.setAttribute('disabled', 'disabled');

const onClickHandlerStart = () => {
  intervalColor = setInterval(() => (refs.body.style.backgroundColor = getRandomHexColor()), 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
};

const onClickHandlerStop = () => {
  clearInterval(intervalColor);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');
};

refs.start.addEventListener('click', onClickHandlerStart);
refs.stop.addEventListener('click', onClickHandlerStop);
