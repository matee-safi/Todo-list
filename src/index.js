import "./style.css";
import reloadIcon from "./images/refresh.png";
import enterIcon from "./images/enter.png";
import moreIcon from "./images/more.png";

const tasks = [
  {
    description: "Create the structure of your project",
    completed: false,
    index: 0,
  },
];

tasks.forEach((task) => {
  const list = document.createElement("div");
  list.classList.add("list-item");
  list.innerHTML = `
  <li class="todo">
    <div>
        <input type="checkbox"><p>${task.description}</p>
    </div>
    <img alt="more" class="more">
  </li>
  `;
  document.querySelector('.last-row').insertAdjacentElement('beforebegin', list)
});

const refresh = document.querySelector(".refresh");
refresh.src = reloadIcon;
const enter = document.querySelector(".enter");
enter.src = enterIcon;
const more = document.querySelectorAll(".more");
more.forEach((img) => {
  img.src = moreIcon;
});

