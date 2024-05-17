const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      taskItem.classList.toggle('completed');
    });
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}