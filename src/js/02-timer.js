import '../css/common.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});
refs.startBtn.setAttribute('disabled', true);
let timeAdd = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeAdd = selectedDates[0].getTime();
    console.log(timeAdd);
    if (timeAdd < new Date()) {
      window.alert('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
      return;
    }

    refs.startBtn.removeAttribute('disabled');
  },
};
const timer = {
  intervalId: null,
  isActive: false,
  start() {
    this.isActive = true;
    setInterval(() => {
      const deltaTime = timeAdd - new Date().getTime();

      if (deltaTime <= 0) {
        clearInterval(timer);
        return;
      }
      const time = convertMs(deltaTime);
      updateClockInfo(time);
    }, 1000);
    refs.startBtn.setAttribute('disabled', true);
  },
};

function updateClockInfo({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

flatpickr(refs.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
