const todoList = ['make dinner', 'wash dishes'];
const todoList2 = [];
const todoList3 = [];

renderTodoList();
renderTodoList2();

function renderTodoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList2.length; i++){
    const listE = todoList2[i];
    const html = `<p>${listE}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function renderTodoList2(){
  let todoListHTML = '';

  for(let i=0; i<todoList3.length; i++){
    const listObject = todoList3[i];
    //const name = listObject.name;
    //const dueDate = listObject.dueDate;
    const {name, dueDate} = listObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todoList3.splice(${i}, 1);
          renderTodoList2();"
          class="delete-todo-button"
        >Delete</button>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list2').innerHTML = todoListHTML;

}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value='';

  //renderTodoList();
}

function addTodo2(){
  const inputElement = document.querySelector('.js-name-input2');
  const name = inputElement.value;
  
  todoList2.push(name);
  console.log(todoList);

  inputElement.value='';

  renderTodoList();
}

function addTodo3(){
  const inputElement = document.querySelector('.js-name-input3');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList3.push(//name: name,
    //dueDate: dueDate 
    {name, dueDate});
  //console.log(todoList);

  inputElement.value='';

  renderTodoList2();
}