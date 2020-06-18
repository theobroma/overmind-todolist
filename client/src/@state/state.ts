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
  todos: {
    [id: string]: Todo;
  };
  filter: Filter;
  currentTodos: Todo[];
};

export const state: State = {
  todos: {},
  filter: Filter.ALL,
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
};
