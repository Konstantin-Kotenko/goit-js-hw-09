function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalColor;

const onHandlerClickStart = () => {
  intervalColor = setInterval(() => (refs.body.style.backgroundColor = getRandomHexColor()), 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
};

const onHandlerClickStop = () => {
  clearInterval(intervalColor);
  refs.start.disabled = false;
  refs.stop.disabled = true;
};

refs.start.addEventListener('click', onHandlerClickStart);
refs.stop.addEventListener('click', onHandlerClickStop);
