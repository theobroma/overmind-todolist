import { Todo } from './state';

export const storage = {
  saveTodos(todos: { [id: string]: Todo }) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  getTodos(): { [id: string]: Todo } {
    return JSON.parse(localStorage.getItem('todos') || '{}');
  },
};

export const ids = {
  create(): string {
    return Date.now().toString();
  },
};
