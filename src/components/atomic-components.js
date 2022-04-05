const EditButton = ({ editTodo, item }) => {
  return (
    <button onClick={() => editTodo(item)}>
      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
    </button>
  );
};

const AddButton = ({ modalToggle }) => {
  return (
    <button className="add-task btn pd-y-base" onClick={modalToggle}>
      <i className="fa fa-plus pd-x-base"></i>Add Task
    </button>
  );
};

export { EditButton, AddButton };
