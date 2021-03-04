// get elements
let taskform = document.querySelector("#task-form");
let taskstable = document.querySelector("table.new-tasks");

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

taskstable.addEventListener("change", (e) => {
  console.log(e);
  console.log(e.target);
  e.target.closest("tr").remove();
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
  thetask.value = "";
  thetask.setAttribute("placeholder", "Add a new task...")
}

function createNewTask() {
  let tasktable = document.querySelector(".new-tasks");
  let newrow = tasktable.insertRow();
  let output = `
      <td> ${icons[task.type]} </td>
      <td> ${task.task} </td>
      <td><input type="checkbox" class="check-completed"></td>
  `;

  newrow.innerHTML = output;
  alertUser("success", "New task added, GANBATE BANZAI!")

}

function alertUser(theclass, msg) {
  let thealert = document.querySelector(".alert");
  thealert.classList = "alert alert-" + theclass;
  thealert.innerText = msg;
  thealert.style.opacity = "1";
  setTimeout(()=> {
    thealert.style.opacity = "0";
  }, 3000)
}

// helper functions


function fadeIn(el) {
  el.style.display = "initial";
  setTimeout(function() {
    el.style.opacity = "1";
  }, 10)
}

function fadeOut(el) {
  el.style.opacity = "0";
  setTimeout(function() {
    el.style.display = "none";
  }, 300)
}
