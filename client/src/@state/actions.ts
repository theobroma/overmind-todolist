import { Action } from 'overmind';
import { Filter } from './state';

export const addTodo: Action<string> = ({ state, effects }, title) => {
  const id = effects.ids.create();
  state.todos[id] = {
    id,
    title: title + '',
    completed: false,
  };
};

export const toggleTodo: Action<string> = ({ state }, todoId) => {
  state.todos[todoId].completed = !state.todos[todoId].completed;
};

export const changeFilter: Action<Filter> = ({ state }, filter) => {
  state.filter = filter;
};
