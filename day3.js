function getTodosFromLocalstorage() {
  const todoListString = localStorage.getItem('todo-list');
  if (!todoListString) {
    saveTodosToLocalstorage([]);
    return [];
  }
  const todoListArray = JSON.parse(todoListString);
  return todoListArray;
}

function saveTodosToLocalstorage(todos) {
  localStorage.setItem('todo-list', JSON.stringify(todos));
}
function getTodoList() {
  const todoList = document.getElementById('todo-list');
  return todoList;
}

function createTodoToDisplay(id, status, value) {
  let statusString = '';
  if (status === true) {
    statusString = 'id="flexCheckChecked" checked';
  } else {
    statusString = 'id="flexCheckDefault"';
  }
  return `<div class=" form-check">
              <input class="form-check-input" type="checkbox" name="Need-To_do" onclick="checkTodo(${id})" ${statusString}>
              <label class="form-check-label ${
                status === true ? 'text-decoration-line-through' : ''
              }">${value}</p>
            </div>`;
}

const clearAllButton = getClearAllButton();

clearAllButton.onclick = clearAllTodos;

function displayClearButton() {
  if (getTodosFromLocalstorage().length === 0) {
    clearAllButton.style.display = 'none';
  }else{
    clearAllButton.style.display = 'block';
  }
}

function displayAllTodos() {
  const todoList = getTodoList();
  let todosToDisplayHTML = '';
  const todosInLocalstorage = getTodosFromLocalstorage();
  todosInLocalstorage.forEach(function (todo) {
    todosToDisplayHTML += createTodoToDisplay(todo.id, todo.status, todo.value);
  });
  todoList.innerHTML = todosToDisplayHTML;
  displayClearButton();
}
function getInputTodo() {
  const todoInput = document.getElementById('todo-input');
  return todoInput;
}

function getButtonCreateTodo() {
  const createTodoButton = document.getElementById('create-todo-button');
  return createTodoButton;
}

function getCheckAllTodoButton() {
  const checkAllTodoButton = document.getElementById('checkall-todo-button')
  return checkAllTodoButton
}

function createTodo() {
  event.preventDefault();
  const todoInput = getInputTodo();
  const todosInLocalstorage = getTodosFromLocalstorage();

  todosInLocalstorage.push({
    id: todosInLocalstorage.length,
    status: false,
    value: todoInput.value,
  });
  saveTodosToLocalstorage(todosInLocalstorage);
  todoInput.value = '';
  displayAllTodos();
}
 
function CheckAll(){  
  event.preventDefault()
  var ele=document.getElementsByName('Need-To_do');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
}  

const createTodoButton = getButtonCreateTodo();
createTodoButton.onclick = createTodo;

displayAllTodos();
// let sampleString = 'Hello ';
// sampleString += 'Tuan'; // sampleString = sampleString+'Tuan'
// console.log(sampleString);

// console.log(getTodosFromLocalstorage());

function checkTodo(todoIdToChange) {
  const todosInLocalstorage = getTodosFromLocalstorage();
  const newTodos = todosInLocalstorage.map(function (todo) {
    if (todo.id !== todoIdToChange) {
      return todo;
    }
    todo.status = !todo.status;
    return todo;
  });
  saveTodosToLocalstorage(newTodos);
}

function getClearAllButton() {
  const clearAllButton = document.getElementById('clear-all-button');
  return clearAllButton;
}

function clearAllTodos() {
  saveTodosToLocalstorage([]);
  displayAllTodos();
}