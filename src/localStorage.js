// Local storage
export const getItems = () => {
  const value = localStorage.getItem('Todo-List') || '[]';
  return JSON.parse(value);
};

export const setItems = (items) => {
  const jsonItems = JSON.stringify(items);
  localStorage.setItem('Todo-List', jsonItems);
};
