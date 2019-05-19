const elm = document.querySelector('#loading');
const mainElm = document.querySelector('#main');

let counter = 0;

export const start = () => {
  elm.classList.add('show');
  mainElm.classList.add('hide');
  counter += 1;
};

export const finish = () => {
  counter -= 1;
  if (!counter) {
    elm.classList.remove('show');
    mainElm.classList.remove('hide');
  }
};
