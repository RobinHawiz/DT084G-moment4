//Här hämtar jag alla elementen som krävs för att lägga till eller ta bort en todo när användaren trycker på Lägg till eller Rensa.
const todoButton = document.getElementById("newtodobutton");
const todoList = document.getElementById("todolist");
const todoInput = document.getElementById("newtodo");
const clearButton = document.getElementById("clearbutton");
const message = document.getElementById("message");

//Här skapar jag alla variabler
//Denna array används för att läsa ut och lägga till innehåll i local storage.
let todos = [];
//Här skapar jag alla event listeners.
window.addEventListener("load", loadStorage);
//Skapar en ny todo som består av en <article>, vars innehåll är texten från "newtodo"s input.
todoButton.addEventListener("click", createNewTodo);
//Tar bort alla elementen i todolist.
clearButton.addEventListener("click", deleteStorage);

//Här skapar jag alla funktioner.
function loadStorage() {
  if (localStorage.getItem("todos") !== null) {
    /*Local storage använder alltid bara ett objekt. Objektet har nyckeln "todos" med värdet som en sträng,
    vilket representerar en array, vars element är objekt som är användarens tillaggda todo. Ex "[{"1": "Borsta tänderna"}, {"2": "Scrolla tiktok"}]".
    Mha JSON.parse kan vi konvertera strängen från local storage till en array igen.
    */
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  for (let i = 0; i < todos.length; i++) {
    //Tar ut nyckeln ur objektet som finns lagrad i todos.
    let key = Object.keys(todos[i])[0];
    //Tar ut värdet ur objektet som finns lagrad i todos.
    let value = todos[i][key];
    addTodo(key, value);
  }
}

/*Istället för att lagra alla todos (objekt) var för sig i local storage, 
så lagrar jag alla todos (objekt) som ett enda värde med nyckeln "todos" mha JSON-formatet.*/
function saveToStorage(key, value) {
  todos.push({ [key]: value });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteStorage() {
  todos = [];
  localStorage.clear();
  todoList.innerHTML = "";
}

function deleteTodo(e) {
  let newTodo = e.target;
  for (i = 0; i < todos.length; i++) {
    //Itererar genom todos-arrayen tills jag hittar en matchande nyckel till den todo som vi vill ta bort.
    if (Object.keys(todos[i])[0] === newTodo.id) {
      todos.splice(i, 1);
      //Uppdaterar local storage med den nya listan.
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  //Tydligen går det inte för ett element att ta bort sig själv, så jag måste genom förälder-elementet ta bort elementet som trycktes.
  newTodo.parentElement.removeChild(newTodo);
}

function addTodo(key, value) {
  //Ett nytt <article>-element skapas, ger den texten som användaren skrev in i inputen och lägger sedan till <article> i användarens todolista.
  const newTodo = document.createElement("article");
  newTodo.innerHTML = value;
  /*Vi behöver ge det nya <article>-elementet attributet id, vars id-värde är den motsvarande nyckeln i objektet som representerar elementet.
  Detta för att kunna hitta den i vår todos-array och radera den när det behövs.*/
  newTodo.setAttribute("id", key);
  //Ger <article>-elementet funktionaliteten att tas bort om användaren trycker på den.
  newTodo.addEventListener("click", deleteTodo);
  todoList.appendChild(newTodo);
}

function createNewTodo(e) {
  //Förhindrar formuläret från att ladda om sidan.
  e.preventDefault();
  if (checkValidInput()) {
    //Lägger den nyskapade todo-objektet till local storage. Nyckeln är en slumpmässig siffra mellan 0-1000. Detta görs för att förhindra elementen från att erhålla samma nycklar.
    let key = Math.floor(Math.random() * 1000);
    let value = todoInput.value;
    saveToStorage(key, value);
    addTodo(key, value);
    //Tar bort texten som användaren skrev in som input.
    todoInput.value = "";
  }
}

function checkValidInput() {
  if (todoInput.value.length < 5) {
    message.innerHTML =
      "Texten är för kort. Den måste innehålla minst 5 tecken.";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
}
