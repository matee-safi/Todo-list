import './style.css';
import reloadIcon from './images/refresh.png';
import enterIcon from './images/enter.png';
import { enterTask, addItem, refreshList } from './CRUD.js';

window.onload = refreshList;

// Load images
const refresh = document.querySelector('.refresh');
refresh.src = reloadIcon;
const enter = document.querySelector('.enter');
enter.src = enterIcon;

enter.addEventListener('click', addItem);
enterTask.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector('.enter').click();
  }
});
