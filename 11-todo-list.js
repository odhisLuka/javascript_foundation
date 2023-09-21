const addElement = document.getElementById("js-add-btn");

// storing user todo items in an empty array
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
// localStorage.clear("todoList");

function addTodoItem() {
  const inputElement = document.querySelector(".todo-input");
  const todoItem = inputElement.value;
  const dateSelected = document.getElementById("date");
  const dueDate = dateSelected.value;

  todoList.push({
    todoItem,
    dueDate,
  });

  inputElement.value = ""; // clears the input field
  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

addElement.addEventListener("click", addTodoItem);

// Generating the  HTML
function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject) => {
    const { todoItem, dueDate } = todoObject;
    const html = `
    <div class="todo-item">${todoItem}</div> 
    <div class="todo-item">${dueDate}</div>
    <button class="delete-btn">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todoList-container").innerHTML = todoListHTML;
  document.querySelectorAll(".delete-btn").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      // console.log(index);
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

/*
// get date format
function padTwoDigits(num) {
  // add a leading zero if the date and month is single digit
  return num.toString().padStart(2, "0");
}
function dateFormat(date = new Date()) {
  return [
    date.getFullYear(),
    padTwoDigits(date.getMonth() + 1),
    padTwoDigits(date.getDate()),
  ].join("-");
}
*/
