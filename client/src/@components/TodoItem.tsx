import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Todo } from '../@state/state';
import { useOvermind } from '../@state';

const TodoItem: React.FC<{
  todo: Todo;
  isEditing: boolean;
}> = ({ todo, isEditing }) => {
  const { state, actions } = useOvermind();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, isEditing]);

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: isEditing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => actions.toggleTodo(todo.id)}
        />
        <label onDoubleClick={() => actions.editTodo(todo.id)}>
          {todo.title}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => actions.removeTodo(todo.id)}
        />
      </div>
      {/* isEditing */}
      {isEditing ? (
        <input
          className="edit"
          value={state.editingTodoTitle}
          onBlur={() => actions.saveEditingTodoTitle()}
          onChange={(event) =>
            actions.changeEditingTodoTitle(event.currentTarget.value)
          }
          onKeyDown={(event) => {
            if (event.keyCode === 27) {
              actions.cancelEditingTodo();
            } else if (event.keyCode === 13) {
              actions.saveEditingTodoTitle();
            }
          }}
          ref={inputRef}
        />
      ) : null}
    </li>
  );
};

export default TodoItem;
