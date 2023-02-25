import { getItems, setItems } from './localStorage.js';
import { refreshList, lists } from './render.js';

const enterTask = document.querySelector('.task-input');
// Add and remove items
export const addItem = () => {
  if (enterTask.value) {
    lists.unshift({
      description: enterTask.value,
      completed: false,
      index: lists.length + 1,
    });
    enterTask.value = '';
    setItems(lists);
    refreshList();
  }
};

// Update data
export const updateItem = (item, key, value) => {
  item[key] = value;
  setItems(lists);
  refreshList();
};

const refreshIndex = () => {
  for (let i = 1; i <= lists; i += 1) {
    lists[i].index = i;
  }
};

// Remove item
export const removeItem = (taskIndex) => {
  const list = getItems();
  let index = 1;
  const newList = [];
  list.forEach((element) => {
    if (taskIndex != index) {
      newList.push(element);
    }
    index++;
  });
  setItems(newList);
  refreshIndex;
  refreshList();
};
