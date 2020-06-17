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
};

export const state: State = {
  todos: {},
  filter: Filter.ALL,
};
