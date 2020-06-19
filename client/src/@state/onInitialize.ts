import { OnInitialize } from 'overmind';
import { Filter } from './state';

export const onInitialize: OnInitialize = async (
  { state, actions, effects },
  instance
) => {
  // ===================================
  state.todos = effects.storage.getTodos();
  // ===================================
  instance.reaction(
    // Access and return some state to react to
    ({ todos }) => todos,
    // Do something with the returned value
    (todos) => effects.storage.saveTodos(todos),
    // If you return an object or array from the state you can set this to true.
    // The reaction will run when any nested changes occur as well
    { nested: true }
  );
  // ===================================
  effects.router.initialize({
    '/': () => actions.changeFilter(Filter.ALL),
    '/active': () => actions.changeFilter(Filter.ACTIVE),
    '/completed': () => actions.changeFilter(Filter.COMPLETED),
  });
};
