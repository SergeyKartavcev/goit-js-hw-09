const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', () => {
  timer.start();
});
stopBtn.addEventListener('click', () => {
  timer.stop();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const timer = {
  intervalId: 0,
  isActive: false,
  start() {
    if (this.isActive) {
    }
    this.intervalId = setInterval(() => {
      changeBody();
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
  },
  stop() {
    clearInterval(this.intervalId);
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
  },
};

function changeBody() {
  body.style.backgroundColor = getRandomHexColor();
}
