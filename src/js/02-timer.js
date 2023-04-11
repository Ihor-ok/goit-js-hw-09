import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    buttonStart: document.querySelector('button'),
    day: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),

}
// console.log(refs.seconds);
let countdownTime = 0;
let timerId = null; 

refs.buttonStart.disabled = true;
refs.buttonStart.addEventListener('click', onClickStart);

function onClickStart() {
  console.log(convertMs(countdownTime));

  timerId = setInterval(() => {
    countdownTime -= 1000; 

    if (countdownTime < 0) {
      clearInterval(timerId);
      return
    }

    let time = convertMs(countdownTime);
    updateClockface(time);
    // console.log('Test timer');
    // console.log(countdownTime);
  }, 1000);

};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function updateClockface({ days, hours, minutes, seconds }) {
  refs.seconds.textContent = addLeadingZero(seconds);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.hours.textContent = addLeadingZero(hours);
  refs.day.textContent = addLeadingZero(days);
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
    if (options.defaultDate < selectedDates[0]) {
      refs.buttonStart.disabled = false;
      countdownTime = selectedDates[0] - options.defaultDate;   
      }
      
    if (options.defaultDate > selectedDates[0]) {
      // window.alert("Please choose a date in the future");
      Notify.failure("Please choose a date in the future");
      }
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}





 


