let Filter = 'all'
let tasks = [];

try {
    tasks = JSON.parse(localStorage.getItem('task')) || []
} catch (err) {
    console.log(err)
    tasks = [];
}

renderTasks();
document.getElementById('search-input').addEventListener('input', renderTasks);

function saveToLocalStorage() {
    localStorage.setItem('task', JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("todo-list");
    const searchInput = document.getElementById('search-input').value.toLowerCase() || '';
    list.innerHTML = '';

    let filterTasks = tasks.filter(task => {
        const matcheSearch = task.text.toLowerCase().includes(searchInput);
        const matcheFilter =
            (Filter === 'all') ||
            (Filter === 'active' && !task.completed) ||
            (Filter === 'completed' && task.completed);

        return matcheSearch && matcheFilter;
    });

    filterTasks.forEach(task => {
        let badgeColor = 'secondary';
        if(task.priority === 'High') badgeColor = 'danger';
        if(task.priority === 'Medium') badgeColor = 'warning';
        if(task.priority === 'Low') badgeColor = 'success';

        const item = document.createElement('li');
        item.className = 'list-group-item task-item d-flex justify-content-between align-items-center p-3 mb-2 border-0';
        item.innerHTML = `
            <div class="d-flex align-items-center gap-3">
                <input class="form-check-input mt-0" type="checkbox"
                    ${task.completed ? 'checked' : ''}
                    onchange="toggleComplete(${task.id})">

                <div class="${task.completed ? 'completed-task' : ''}">
                    <div class="fw-bold">${task.text} <span class="badge border border-${badgeColor} text-${badgeColor} bg-transparent ms-2" style="font-size: 0.7em;">${task.priority}</span></div>
                    <small class="text-secondary" style="font-size: 0.8em;">
                        <i class="bi bi-clock"></i> ${new Date(task.id).toLocaleString()}
                    </small>
                </div>
            </div>

            <div class="btn-group">
                <button onclick="editTask(${task.id})" class="btn btn-sm btn-outline-secondary border-0"><i class="bi bi-pencil-fill"></i></button>
                <button onclick="deleteTask(${task.id})" class="btn btn-sm btn-outline-danger border-0"><i class="bi bi-trash-fill"></i></button>
            </div>
        `;
        list.appendChild(item);
        updateStatus();
    });
}

function addTask() {
    const input = document.getElementById("todo-input");
    const select = document.getElementById("priority-select");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter task!!!");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        priority: select.value,
        completed: false
    };

    tasks.unshift(newTask);
    saveToLocalStorage();
    renderTasks();
    input.value = "";
    select.value = "Low";
}

function deleteTask(taskId) {
    if (confirm('Do you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveToLocalStorage();
        renderTasks();
    }
}

function toggleComplete(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
        renderTasks();
    }
}

function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            saveToLocalStorage();
            renderTasks();
        }
    }
}

function filterTasks(status) {
    Filter = status;
    renderTasks();
}

function updateStatus() {
    const totalTasks = tasks.length;
    const activeTasks = tasks.filter(task => !task.completed).length;
    const statsElement = document.getElementById('task-stats');
    if (statsElement) {
        statsElement.innerHTML = `${totalTasks} total • ${activeTasks} active`;
    }
}