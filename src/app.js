import { addTodo, toggleTodo, removeTodo, remaining } from './todo.js';
let list = JSON.parse(localStorage.getItem('todos') || '[]');
const $ = id => document.getElementById(id);
function render() {
  localStorage.setItem('todos', JSON.stringify(list));
  $('l').innerHTML = '';
  for (const i of list) {
    const li = document.createElement('li');
    li.textContent = i.text; li.className = i.done ? 'done' : '';
    li.onclick = () => { list = toggleTodo(list, i.id); render(); };
    const x = document.createElement('button'); x.textContent = 'x';
    x.onclick = e => { e.stopPropagation(); list = removeTodo(list, i.id); render(); };
    li.append(x); $('l').append(li);
  }
  $('c').textContent = `${remaining(list)} left`;
}
$('f').onsubmit = e => { e.preventDefault(); list = addTodo(list, $('t').value); $('t').value = ''; render(); };
fetch('version.txt').then(r => r.ok ? r.text() : 'dev').then(v => { $('v').textContent = v.trim(); }).catch(() => {});
render();
