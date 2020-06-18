import { Action } from 'overmind';
import { Filter } from './state';

export const addTodo: Action = ({ state, effects }) => {
  const id = effects.ids.create();
  state.todos[id] = {
    id,
    title: state.newTodoTitle,
    completed: false,
  };
  state.newTodoTitle = '';
};

export const changeNewTodoTitle: Action<string> = ({ state }, title) => {
  state.newTodoTitle = title;
};

export const changeEditingTodoTitle: Action<string> = ({ state }, title) => {
  state.editingTodoTitle = title;
};

export const toggleTodo: Action<string> = ({ state }, todoId) => {
  state.todos[todoId].completed = !state.todos[todoId].completed;
};

export const toggleAllTodos: Action = ({ state }) => {
  const isAllChecked = state.isAllTodosChecked;

  state.currentTodos.forEach((todo) => {
    todo.completed = !isAllChecked;
  });
};

export const removeTodo: Action<string> = ({ state }, todoId) => {
  delete state.todos[todoId];
};

export const changeFilter: Action<Filter> = ({ state }, filter) => {
  state.filter = filter;
};
