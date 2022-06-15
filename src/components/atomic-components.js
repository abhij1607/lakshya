import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const EditButton = ({ editTodo, item }) => {
  return (
    <button onClick={() => editTodo(item)}>
      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
    </button>
  );
};

const AddButton = ({ modalToggle }) => {
  const {
    userState: { userToken },
  } = useAuth();
  const navigate = useNavigate();
  const handleAddTask = () => {
    userToken ? modalToggle() : navigate("/login");
  };
  return (
    <button className="add-task btn pd-y-base" onClick={handleAddTask}>
      <i className="fa fa-plus pd-x-base"></i>Add Task
    </button>
  );
};

export { EditButton, AddButton };
