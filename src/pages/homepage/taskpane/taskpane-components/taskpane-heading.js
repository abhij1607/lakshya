const TaskPaneHeading = ({ currentTodo }) => {
  return (
    <div className="flex-column current-task">
      <h3>{currentTodo.task}</h3>
      <div className="flex-row pd-x-base">
        <p> Time to focus</p>
        <button className="align-right">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export { TaskPaneHeading };
