function deleteTodo(id) {
    fetch('http://localhost:3333/todos/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {})
        .catch((err) => {
            console.log(err);
        });
}

function updateTodo(id, title, desc) {
    fetch('http://localhost:3333/todos/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, description: desc }),
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

(function getTodos() {
    fetch('http://localhost:3333/todos', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            res.json().then((data) => {
                let msgC = document.createElement('p');
                let msg = document.createTextNode(
                    `📩 Todo successfully deleted!`
                );
                data.data.forEach((element) => {
                    const id = element.id;
                    const title = element.title;
                    const desc = element.description;

                    let delWin = document.querySelector('.del-window');
                    let delMessage = document.querySelector('.del-msg');

                    msgC.appendChild(msg);
                    delMessage.appendChild(msgC);

                    const a = document.createElement('div');
                    const b = document.createElement('h2');
                    const c = document.createElement('p');
                    const o = document.createElement('button');
                    o.setAttribute('class', 'delete');
                    o.addEventListener('click', () => {
                        delWin.classList.remove('fade-out');
                        delWin.classList.remove('hidden');
                        delWin.classList.add('fade-in');
                        const delBtn = document.getElementById('del');
                        delBtn.addEventListener('click', () => {
                            setTimeout(() => {
                                deleteTodo(id);
                            }, 3000);
                            delMessage.classList.remove('hidden');
                            delMessage.classList.add('fade-in');
                            setTimeout(() => {
                                delMessage.classList.add('fade-out');
                                setTimeout(() => {
                                    delMessage.classList.add('hidden');
                                }, 2300);
                            }, 2500);
                        });
                    });

                    const cancelBtn = document.getElementById('no-del');

                    cancelBtn.addEventListener('click', () => {
                        delWin.classList.remove('fade-in');
                        delWin.classList.add('fade-out');
                        setTimeout(() => {
                            delWin.classList.add('hidden');
                        }, 1000);
                    });

                    //update
                    const updateWindow = document.getElementById('update');

                    const titleE = document.getElementById('update-title');
                    const descE = document.getElementById('update-desc');
                    const o2 = document.createElement('button');
                    o2.setAttribute('id', 'edit');
                    o2.setAttribute('id', 'data-id');
                    const g = document.createElement('i');
                    g.setAttribute('data-id', id);
                    var dataID;
                    o2.addEventListener('click', function (e) {
                        dataID = e.target.getAttribute('data-id');
                        body.classList.add('fade-out');
                        setTimeout(() => {
                            body.classList.add('hidden');
                            updateWindow.classList.remove('fade-out');
                            updateWindow.classList.remove('hidden');
                            updateWindow.classList.add('fade-in');
                        }, 1000);
                        titleE.value = title;
                        descE.value = desc;
                        let todoUpdateBtn =
                            document.getElementById('update-btn');
                        todoUpdateBtn.addEventListener('submit', function (e) {
                            e.preventDefault();
                            const titlee = e.target[0].value;
                            const descc = e.target[1].value;
                            updateTodo(dataID, titlee, descc);
                            updateWindow.classList.add('fade-out');
                            setTimeout(() => {
                                updateWindow.classList.add('hidden');
                                body.classList.remove('fade-out');
                                body.classList.remove('hidden');
                                body.classList.add('fade-in');
                            }, 1000);
                        });

                        const todoCloseUpdate =
                            document.getElementById('update-close');
                        todoCloseUpdate.addEventListener('click', function (e) {
                            updateWindow.classList.add('fade-out');
                            setTimeout(() => {
                                updateWindow.classList.add('hidden');
                                body.classList.remove('fade-out');
                                body.classList.remove('hidden');
                                body.classList.add('fade-in');
                            }, 1000);
                        });
                    });
                    const d = document.createTextNode(title);
                    const e = document.createTextNode(desc);
                    const x = document.createElement('i');
                    x.setAttribute('class', 'fas fa-trash');
                    g.setAttribute('class', 'fas fa-edit');

                    b.appendChild(d);
                    c.appendChild(e);
                    o.appendChild(x);
                    o2.appendChild(g);
                    a.appendChild(o);
                    a.appendChild(o2);
                    a.appendChild(b);
                    a.appendChild(c);

                    const f = document.querySelector('.todos');
                    const z = document.createElement('div');
                    z.setAttribute('class', 'child');
                    z.appendChild(a);
                    f.appendChild(z);
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
})();
