import { getItems, setItems } from './localStorage.js';
import moreIcon from './images/bin.png';

// Add and remove items
const itemContainer = document.querySelector('.todo-container');

let lists = getItems();

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
    `;
    const removeBtn = document.createElement('img');
    removeBtn.className = 'more';
    removeBtn.src = moreIcon;
    item.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
      lists = lists.filter((t) => t !== element);
      let i = 1;
      lists.forEach((element) => {
        element.index = i;
        i += 1;
      });
      setItems(lists);
      refreshList();
    });

    const updateItem = (item, key, value) => {
      item[key] = value;
      setItems(lists);
      refreshList();
    };

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
};

export const enterTask = document.querySelector('.task-input');

export const addItem = () => {
  if (enterTask.value) {
    const newTask = {
      description: enterTask.value,
      completed: false,
      index: lists.length + 1,
    };
    lists.push(newTask);
    setItems(lists);
    refreshList();
    enterTask.value = '';
  }
};
