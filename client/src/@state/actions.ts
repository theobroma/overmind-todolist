import { Action } from 'overmind';
// import { Filter } from './state';

export const addTodo: Action<string> = ({ state }, title) => {
  const id = Date.now().toString();
  state.todos[id] = {
    id,
    title,
    completed: false,
  };
};
