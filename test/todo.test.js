import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTodo, toggleTodo, removeTodo, remaining } from '../src/todo.js';
test('adds a trimmed item', () => { assert.equal(addTodo([], '  milk ')[0].text, 'milk'); });
test('ignores empty text', () => { assert.deepEqual(addTodo([], '   '), []); });
test('toggles and counts', () => {
  const l = addTodo([], 'a'); const t = toggleTodo(l, l[0].id);
  assert.equal(remaining(l), 1); assert.equal(remaining(t), 0);
});
test('removes an item', () => { const l = addTodo([], 'a'); assert.deepEqual(removeTodo(l, l[0].id), []); });
