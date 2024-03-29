import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  start: document.querySelector('button'),
};

let interval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    if (interval === null) {
      return (refs.start.disabled = false);
    }
  },
};

const flatpickrOption = flatpickr('input#datetime-picker', options);

const onHandlerClick = () => {
  interval = setInterval(() => {
    const newDate = new Date();
    const selectedDate = flatpickrOption.selectedDates[0];
    const deltaTime = selectedDate.getTime() - newDate.getTime();
    if (deltaTime < 0) {
      return createInterval(interval);
    }
    const convertedDate = convertMs(deltaTime);
    addedDate(convertedDate);
    refs.start.disabled = true;
  }, 1000);
};

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

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const addedDate = e => {
  refs.days.textContent = addLeadingZero(e.days);
  refs.hours.textContent = addLeadingZero(e.hours);
  refs.minutes.textContent = addLeadingZero(e.minutes);
  refs.seconds.textContent = addLeadingZero(e.seconds);
};

refs.start.addEventListener('click', onHandlerClick);
