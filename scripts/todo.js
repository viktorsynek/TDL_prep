const todoBtn = document.querySelector('.todo-btn');
const todoWindow = document.getElementById('create');
const todoCloseBtn = document.getElementById('create-close');
const todoCreateForm = document.getElementById('create-btn');
const body = document.getElementById('body');

function createTodos(title, description) {
    fetch('http://localhost:3333/todos', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, description: description }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

todoBtn.addEventListener('click', function (e) {
    body.classList.add('fade-out');
    setTimeout(() => {
        body.classList.add('hidden');
        todoWindow.classList.remove('fade-out');
        todoWindow.classList.remove('hidden');
        todoWindow.classList.add('fade-in');
    }, 1000);
});

todoCloseBtn.addEventListener('click', function (e) {
    todoWindow.classList.add('fade-out');
    setTimeout(() => {
        todoWindow.classList.add('hidden');
        body.classList.remove('fade-out');
        body.classList.remove('hidden');
        body.classList.add('fade-in');
    }, 1000);
});

todoCreateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    createTodos(title, description);
});
