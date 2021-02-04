//TO-DO
const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#addButton").addEventListener("click", addTodo);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addTodo()
  }
});

//INPUT TO ARRAY
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  if (todoText == "") {
    alert("Don't have anything to do 2day? Add smt to your list ;)");
  } else {
    const todoObject = {
      id: todoList.length,
      todoText: todoText, 
      isDone: false,
    };

    
    todoList.unshift(todoObject);
    displayTodos();
  }
}


//isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED OR TO FALSE IF IT WAS TRUE BEFORE
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);

  todoList[selectedTodoIndex].isDone
    ? (todoList[selectedTodoIndex].isDone = false)
    : (todoList[selectedTodoIndex].isDone = true);
  displayTodos();
}

//DELETE ITEM
function deleteItem(x) {
  todoList.splice(
    todoList.findIndex((item) => item.id == x),
    1
  );
  displayTodos();
}

//DISPLAY ENTERED ITEMS
function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.todoText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });

    todoListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}