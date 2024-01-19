function displayTodo() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let list = '';

    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            list += `
          <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
            <li class="list-group-item d-flex align-items-center pe-0 py-3 rounded-0 border-0 bg-transparent">
              <div class="form-check">
                <input class="form-check-input me-0" type="checkbox" value="" id="${todos[i].id}" ${todos[i].checked ? 'checked' : ''} aria-label="...">
              </div>
            </li>
            <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
              <p class="lead fw-normal mb-0">${todos[i].name}</p>
            </li>
            <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
              <button type="button" class="btn btn-danger" id="${todos[i].id}" onclick="deleteTodo(this.id)">Delete</button>
            </li>
          </ul>
        `;
        }
    }

    document.getElementById('list-todo').innerHTML = list;
}

function submitTodo() {
    const todo = document.getElementById('add-todo').value;
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Create a new todo item and add it to the todos array
    if (todo) {
        const newTodo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
            name: todo,
            checked: false
        };
        todos.push(newTodo);

        // Save the updated todos array to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));

        // Clear the input field
        document.getElementById('add-todo').value = '';

        // Update the display
        displayTodo();
    }
}

function setCompleted(checked, id) {
    let todos = JSON.parse(localStorage.getItem('todos'))

    todos = todos.map(el => {
        if (el.id === Number(id)) {
            el.checked = checked
        }
        return el
    })
    localStorage.setItem('todos', JSON.stringify(todos))

    displayTodo()
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos'))

    console.log(todos);
    todos = todos.filter(el => el.id !== Number(id))

    if (todos.length) {
        localStorage.setItem('todos', JSON.stringify(todos))
    } else {
        localStorage.removeItem('todos')
    }
    displayTodo()
}

