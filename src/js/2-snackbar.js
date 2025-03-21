import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayValue = form.elements.delay.value;
  const state = form.elements.state.value;
  const delay = Number(delayValue);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#79E581DE',
        icon: false,
        progressBar: false,
        close: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#DE6969',
        icon: false,
        progressBar: false,
        close: false,
      });
    });
  form.reset();
});
