import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const start = document.querySelector('button');
let startBtn = start.setAttribute('disabled', 'disabled');
let timerId;

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= options.defaultDate) {
      return window.alert('Please choose a date in the future');
    }
    startBtn = start.removeAttribute('disabled');
  },
};

console.log(options.defaultDate);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// start.addEventListener('click', () => (timerId = setInterval(convertMs)), 1000);
flatpickr('input#datetime-picker', options);
