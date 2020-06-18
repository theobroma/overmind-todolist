import { OnInitialize } from 'overmind';
// import { Filter } from './state';
export const onInitialize: OnInitialize = async (
  { state, actions, effects },
  overmind
) => {
  const initialTodosData = {
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
    '1592455711793': {
      completed: true,
      id: '1592455711793',
      title: '333',
    },
  };
  state.todos = initialTodosData;
};
