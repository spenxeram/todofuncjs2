// get elements
let taskform = document.querySelector("#task-form");

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

}

// helper functions
