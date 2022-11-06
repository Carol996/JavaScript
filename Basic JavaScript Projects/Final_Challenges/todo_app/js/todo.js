//this function gets the task from input//
function  get_todos() {
    var todos = new Array; //this creates an array of tasks that are inputted
    var todos_str = localStorage.getItem('todo'); //this pulls the task that was saved in the web browser memory
    if (todos_str !== null) { //if the input is not null, then JSON.parse will communicate with the web browser to make the task a JS object
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add()  { //this function adds the inputted task to the get_todos function array
    var task = document.getElementById('task').value; //this takes the inputed task and creates a variable of it
    var todos = get_todos();
    
    todos.push(task); //this adds a new task at the end of the array
    localStorage.setItem('todo', JSON.stringify(todos)); //this converts the task input to a JSON string
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() { //this function keeps the tasks permanently displayed on the sreen
    var todos = get_todos(); //this sets the task that was retrieved as a variable

    var html = '<ul>'; //this sets up each task as an ul elmenent within the doc
    for (var i = 0;  i < todos.length;  i++)    {  //this displays a task to the list in the order that it's inputted
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>'; //this also displays the task as a list and creates the button with the x in it
    };
    
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; //this displays the task as a list

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++)  {
        buttons[i].addEventListener('click', remove);
    };
}

function  remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

document.getElementById('add').addEventListener('click', add); //this displays the inputted task when the "add item" button is clicked
show(); //this will keep the inputs displayed permanetly on the screen

