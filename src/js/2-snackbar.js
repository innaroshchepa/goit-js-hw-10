import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const delayInput = form.elements['delay'];
    const delay = parseInt(delayInput.value);

    const stateInput = form.elements['state'];
    const state = stateInput.value;

    try {
      const result = await new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
          setTimeout(() => {
            resolve(delay);
          }, delay);
        } else {
          setTimeout(() => {
            reject(delay);
          }, delay);
        }
        form.reset();
      });

      iziToast.success({
        message: `Fulfilled promise in ${result}ms`,
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        messageSize: '16px',
        position: 'center',
        backgroundColor: '#59A10D'
      });

    } catch (error) {
      iziToast.error({
        message: `Rejected promise in ${error}ms`,
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        messageSize: '16px',
        position: 'center',
        backgroundColor: '#EF4040'
      });
    }
  });
});