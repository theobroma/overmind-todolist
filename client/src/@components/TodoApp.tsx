import * as React from 'react';

import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import { useOvermind } from '../@state';
import { Todo } from '../@state/state';

const TodoApp: React.FC = () => {
  const { state, actions } = useOvermind();

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={state.newTodoTitle}
          onChange={(event) =>
            actions.changeNewTodoTitle(event.currentTarget.value)
          }
          onKeyDown={(event) => {
            if (event.keyCode !== 13) return;
            actions.addTodo();
          }}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => actions.toggleAllTodos()}
          checked={state.isAllTodosChecked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {state.currentTodos.map((todo: Todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={state.editingTodoId === todo.id}
              />
            );
          })}
        </ul>
      </section>
      <TodoFooter />
    </div>
  );
};

export default TodoApp;
