function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalColor;
refs.stop.disabled = true;

const onClickHandlerStart = () => {
  intervalColor = setInterval(() => (refs.body.style.backgroundColor = getRandomHexColor()), 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
};

const onClickHandlerStop = () => {
  clearInterval(intervalColor);
  refs.start.disabled = false;
  refs.stop.disabled = true;
};

refs.start.addEventListener('click', onClickHandlerStart);
refs.stop.addEventListener('click', onClickHandlerStop);
