const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

let timerId = null;
let activeButtonStart = true;

console.log(refs.body);

refs.startButton.addEventListener('click', changeBackgroundColor);
refs.stopButton.addEventListener('click', stopChangeBackgroundColor);

function changeBackgroundColor() {
    if (activeButtonStart) {
        timerId = setInterval(() => { refs.body.style.backgroundColor = getRandomHexColor(); }, 1000);
        activeButtonStart = false;
    };
};

function stopChangeBackgroundColor() {
    clearInterval(timerId);
    activeButtonStart = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}