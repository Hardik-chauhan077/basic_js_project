let todolist = [];
displayitem();

function addtodo() {
    let inputelement = document.querySelector('#input-bar');
    let inputdate = document.querySelector('#date-input');

    let todoelement = inputelement.value.trim();
    let inputdatevalue = inputdate.value;

    if (todoelement === '' || inputdatevalue === '') {
        alert("Please enter both a todo item and a date.");
        return;
    }

    todolist.push({ task: todoelement, date: inputdatevalue });

    inputelement.value = '';
    inputdate.value = '';
    displayitem();
}
function displayitem() {
    let list = document.querySelector('#todo-item');
    list.innerHTML = ''; // Clear existing content

    todolist.forEach((item, index) => {
        let container = document.createElement('div');
        container.className = 'todo-container'; // For styling each task row

        let button1 = document.createElement('button');
        button1.textContent = item.task;
        button1.className = 'todo-button';

        let button2 = document.createElement('button');
        button2.textContent = item.date;
        button2.className = 'date-button';

        let button3 = document.createElement('button');
        button3.textContent = 'delte';
        button3.className = 'delte';

        // for delte the task 
        button3.onclick = function(){
            todolist.splice(index, 1);// slice is a method that removes elements from an array 1 is here for delte the 1 item 
            displayitem();
        }

        container.appendChild(button1);
        container.appendChild(button2);
        container.appendChild(button3);
        list.appendChild(container);
    });
}