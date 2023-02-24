import './style.css';
import reloadIcon from './refresh.png';
import enterIcon from './enter.png';
import moreIcon from './more.png';

const refresh = document.querySelector('.refresh');
refresh.src = reloadIcon;
const enter = document.querySelector('.enter');
enter.src = enterIcon;
const more = document.querySelectorAll('.more');
more.forEach((img) => {
  img.src = moreIcon;
});

const tasks = [
  {
    description: '',
    completed: false,
    index: 0,
  },
];

tasks.forEach((task) => {
  const list = document.createElement('div');
  list.classList.add('list-item');
  list.innerHTML = `
  <input type="checkbox">
  <p>${task.description}</p>
  <img src="" alt="">
  `;
});