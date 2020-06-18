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
  todos: {
    '1592455711786': {
      completed: false,
      id: '1592455711786',
      title: '111',
    },
    '1592455711792': {
      completed: true,
      id: '1592455711792',
      title: '222',
    },
  },
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
