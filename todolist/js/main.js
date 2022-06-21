let getEle = (id) => document.getElementById(id);

import { Task } from "./models/task.js";
import { TaskList } from "./models/taskList.js";

let taskList = new TaskList();

let renderList = (list, divId) => {
  console.log("Rendering " + divId);
  let content = list.reduce((pre, now) => {
    let type = now.isDone ? "Done" : "Todo";
    let taskId = `task${now.id + type}`;
    return (
      pre +
      `
    <li id=${taskId}>
      <p class="task">${now.name}</p>
      <div class="buttons">
        <button class="remove far fa-trash-alt" onclick="removeTask('${now.id}')"></button>
          <button class="complete far fa-check-circle" onclick="checkTaskDone('${now.id}')"></button>
          <button class="complete fas fa-check-circle"></button>
      </div>
    </li>
  `
    );
  }, "");
  // console.log(content);
  getEle(divId).innerHTML = content;
};

let render = (list) => {
  console.log("Rendering...");
  let todo = [];
  let done = [];
  list.arr.forEach((ele) => {
    ele.isDone ? (done = [...done, ele]) : (todo = [...todo, ele]);
  });
  // console.log({ todo });
  // console.log({ done });

  renderList(todo, "todo");
  renderList(done, "completed");
};

let addTask = () => {
  let taskName = getEle("newTask").value;
  let task = new Task(taskName, false);
  taskList.pushTask(task);
  render(taskList);
};

window.removeTask = (id) => {
  taskList.popTask(id);
  console.log(taskList);
  render(taskList);
};

window.checkTaskDone = (id) => {
  let index = taskList.arr.findIndex(ele => ele.id === id);
  taskList.arr[index].isDone = true;
  console.log(taskList);
  render(taskList);
}

window.sortA2Z = (isA2Z) => {
  let sortedList = new TaskList();
  sortedList.arr = taskList.sortTask(isA2Z);
  console.log(sortedList);
  render(sortedList);
}


getEle("addItem").onclick = () => addTask();
