const TaskModal = ({
  todo,
  setTodo,
  todosList,
  setTodosList,
  addTodo,
  updateTodo,
  deleteTodo,
  cancelTodo,
}) => {
  return (
    <div className="task-modal flex-column pd-y-base pd-x-base">
      <input
        type="text"
        className="pd-x-base input input-task mg-y-sm"
        placeholder="What are you working on?"
        value={todo.task || ""}
        onChange={(e) =>
          setTodo((previous) => {
            return { ...previous, task: e.target.value };
          })
        }
      />
      <div className="modal-subtitle">Est. Pomodoro</div>
      <div>
        <input
          type="Number"
          value={todo.estPomodoro}
          min={1}
          className="input input-pomodoro-count"
          onChange={(e) =>
            setTodo((previous) => {
              return { ...previous, estPomodoro: Number(e.target.value) };
            })
          }
        />
        <button
          className="btn"
          onClick={() =>
            setTodo((previous) => {
              return { ...previous, estPomodoro: todo.estPomodoro + 1 };
            })
          }
        >
          <i className="fa fa-2x fa-caret-up" aria-hidden="true"></i>
        </button>
        <button
          className="btn"
          onClick={() =>
            setTodo((previous) => {
              return { ...previous, estPomodoro: todo.estPomodoro - 1 };
            })
          }
        >
          <i className="fa fa-2x fa-caret-down" aria-hidden="true"></i>
        </button>
      </div>
      <div className="flex-row mg-y-sm">
        <button
          className="btn btn-secondary align-left"
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </button>
        <button className="btn btn-secondary mg-x-sm" onClick={cancelTodo}>
          Cancel
        </button>
        <button
          className="btn btn-secondary mg-x-sm"
          onClick={() => (todo.id ? updateTodo(todo) : addTodo(todo))}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { TaskModal };
