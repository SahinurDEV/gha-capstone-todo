// Pure to-do logic, shared by the browser and the tests.
export function addTodo(list, text) {
  const t = String(text ?? '').trim();
  if (!t) return list;
  return [...list, { id: Date.now() + list.length, text: t, done: false }];
}
export function toggleTodo(list, id) {
  return list.map(i => (i.id === id ? { ...i, done: !i.done } : i));
}
export function removeTodo(list, id) {
  return list.filter(i => i.id !== id);
}
export function remaining(list) {
  return list.filter(i => !i.done).length;
}
