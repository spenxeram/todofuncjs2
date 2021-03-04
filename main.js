// get elements
let taskform = document.querySelector("#task-form");
let icons = [
  "<i class='fas fa-cogs'></i>",
  "<i class='fas fa-edit'></i>",
  "<i class='far fa-file-alt'></i>",
  "<i class='fas fa-atlas'></i>"
];
console.log(icons[2]);
// on page load Tasks
let task = {};

// event listeners
taskform.addEventListener("submit", (e) => {
  e.preventDefault();
  getTask();
})

// general functions
function getTask() {
  let thetask = document.querySelector("#task");
  let thetype = document.querySelector("#type");
  task = {
    task: thetask.value,
    type: thetype.value
  };
  console.log(task);
  createNewTask();
}

function createNewTask() {
  let tasktable = document.querySelector(".new-tasks");
  let newrow = tasktable.insertRow();
  let output = `
      <td> ${icons[task.type]} </td>
      <td> ${task.task} </td>
      <td><input type="checkbox" class="check-completed"></td>
  `;
  console.log(output);
  newrow.innerHTML = output;
}

// helper functions
