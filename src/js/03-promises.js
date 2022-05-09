import Notiflix from 'notiflix';

const form = document.querySelector('form');
let formData = {};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

const onFormSubmit = e => {
  e.preventDefault();
  let time = Number(formData.delay);
  for (let i = 0; i < formData.amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, time + i * Number(formData.step))
        .then(message => Notiflix.Notify.success(message))
        .catch(message => Notiflix.Notify.failure(message));
    }, time + i * Number(formData.step));
  }
};

const onformInput = e => {
  formData[e.target.name] = e.target.value;
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onformInput);
