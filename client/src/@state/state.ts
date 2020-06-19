import { derived } from 'overmind';

export enum Filter {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  filter: Filter;
  newTodoTitle: string;
  editingTodoId: string | null;
  editingTodoTitle: string;
  todos: {
    [id: string]: Todo;
  };
  currentTodos: Todo[];
  activeTodoCount: number;
  hasCompletedTodos: boolean;
  isAllTodosChecked: boolean;
};

export const state: State = {
  filter: Filter.ALL,
  newTodoTitle: '',
  editingTodoId: null,
  editingTodoTitle: '',
  todos: {},
  currentTodos: derived(({ todos, filter }: State) => {
    return Object.values(todos).filter((todo) => {
      switch (filter) {
        case Filter.ACTIVE:
          return !todo.completed;
        case Filter.COMPLETED:
          return todo.completed;
        default:
          return true;
      }
    });
  }),
  activeTodoCount: derived(({ todos }: State) => {
    return Object.values(todos).filter((todo) => !todo.completed).length;
  }),
  hasCompletedTodos: derived(({ todos }: State) => {
    return Object.values(todos).some((todo) => todo.completed);
  }),
  isAllTodosChecked: derived(({ currentTodos }: State) => {
    return currentTodos.every((todo) => todo.completed);
  }),
};
