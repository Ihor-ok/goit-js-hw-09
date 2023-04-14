import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay); 
  });  
};

const refs = {
  form: document.querySelector('.form'),
  delayForm: document.querySelector('[name="delay"]'),
  stepForm: document.querySelector('[name="step"]'),
  amountForm: document.querySelector('[name="amount"]'),
  buttonForm: document.querySelector('button'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let position = 1;
  const {
    elements: {delay, step, amount}
  } = evt.currentTarget;

  let firstDelay = Number(delay.value);
  let delayStep = Number(step.value);
  let firstAmount = Number(amount.value);

  for (let i = 0; i < firstAmount; i++) {
  
    createPromise(position, firstDelay).then(() => {}).catch(() => {});

    position += 1;
    firstDelay += delayStep;   
  };
};