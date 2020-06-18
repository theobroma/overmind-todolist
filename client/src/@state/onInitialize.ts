import { OnInitialize } from 'overmind';
export const onInitialize: OnInitialize = async (
  { state, effects },
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
};
