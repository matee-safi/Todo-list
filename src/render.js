import { getItems } from './localStorage.js';
import { updateItem, removeItem } from './CRUD.js';
import moreIcon from './images/bin.png';

const itemContainer = document.querySelector('.todo-container');
export const lists = getItems();
export const refreshList = () => {
  itemContainer.innerHTML = '';
  lists.forEach((element) => {
    const item = document.createElement('li');
    item.id = `${element.index}`;
    item.classList.add('todo');
    const done = document.createElement('input');
    done.type = 'checkbox';
    done.checked = element.completed;
    item.innerHTML = `
    <div>
        <input value="${element.description}" class="description-input">
    </div>
    <img alt="more" class="more">
    `;

    const inputDescription = item.querySelector('input');
    inputDescription.addEventListener('change', () => {
      updateItem(element, 'description', inputDescription.value);
    });

    done.addEventListener('change', () => {
      updateItem(element, 'completed', done.checked);
    });

    const div = item.firstChild.nextSibling;
    div.prepend(done);
    itemContainer.prepend(item);
  });

  const removeBtn = document.querySelectorAll('.more');
  for (let i = 0; i < removeBtn.length; i += 1) {
    const img = removeBtn[i];
    img.src = moreIcon;
    img.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
  }
};
