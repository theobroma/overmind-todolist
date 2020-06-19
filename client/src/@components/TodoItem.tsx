import * as React from 'react';
import classNames from 'classnames';
import { Todo } from '../@state/state';
import { useOvermind } from '../@state';

const TodoItem: React.FC<{
  todo: Todo;
  // isEditing: boolean;
}> = ({ todo }) => {
  const { state, actions } = useOvermind();

  return (
    <li
      className={classNames({
        completed: todo.completed,
        // editing: state.editingTodoId,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => actions.toggleTodo(todo.id)}
        />
        {/* <label onDoubleClick={() => actions.editTodo(todo.id)}>
          {todo.title}
        </label> */}
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => actions.removeTodo(todo.id)}
        />
      </div>
      {/* isEditing */}
      {true ? (
        <input
          className="edit"
          value="value"
          // value={state.editingTodoTitle}
          // onBlur={() => actions.saveEditingTodoTitle()}
          // onChange={(event) =>
          //   actions.changeEditingTodoTitle(event.currentTarget.value)
          // }
          // onKeyDown={(event) => {
          //   if (event.keyCode === 27) {
          //     actions.cancelEditingTodo();
          //   } else if (event.keyCode === 13) {
          //     actions.saveEditingTodoTitle();
          //   }
          // }}
        />
      ) : null}
    </li>
  );
};

export default TodoItem;
