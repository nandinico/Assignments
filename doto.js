document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const Button = document.getElementById('Button');
    const taskList = document.getElementById('taskList');
  
    Button.addEventListener('click', () => {
      const taskText = input.value.trim();
  
      if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
  
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', () => {
          taskItem.classList.toggle('completed');
        });
  
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          taskList.removeChild(taskItem);
        });
  
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
  
        inputField.value = '';
      }
      else{
        alert('Please enter a task.');
      }
    });
  });
  