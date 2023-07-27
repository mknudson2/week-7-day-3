const form = document.querySelector('#sunday-form');
const outputArea = document.querySelector('.outputArea');
const itemsList = []; 

function updateList() {
    const ul = document.createElement('ul');
    itemsList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.task}`;
        ul.appendChild(li);
        li.style.fontSize = '28px';
        li.style.listStyleType = 'none';
        li.style.marginTop = '10px';
        switch (item.priority) {
            case 'low':
                li.style.color = 'green';
                break;
            case 'medium':
                li.style.color = 'orange';
                break;
            case 'high':
                li.style.color = 'red';
                break;
            default:
                li.style.color = 'black';
                break;
        }
        li.addEventListener('click', (e) => {
            const index = itemsList.findIndex(listItem => listItem.task === item.task);
            if (index !== -1) {
                itemsList.splice(index, 1);
                updateList(); 
            }
        });
    });

        outputArea.innerHTML = '';
        outputArea.appendChild(ul);
    }

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userToDo = new FormData(event.target);
    const userItem = userToDo.get('sunday-todo');
    const priority = userToDo.get('priority');

    if (userItem.trim() !== '') { 
        const todoItem = {
            task: userItem,
            priority: priority
        };

        itemsList.push(todoItem);
        updateList(); 

        form.reset();
    }
});