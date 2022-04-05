import { TaskPaneHeading } from "./taskpane-components/taskpane-heading";
import { TaskList } from "./taskpane-components/taskpane-list";

const TaskPane = ({
  todosList,
  isModalActive,
  editTodo,
  currentTodo,
  setCurrentTodo,
}) => {
  return (
    <>
      <TaskPaneHeading currentTodo={currentTodo} />
      <TaskList
        todosList={todosList}
        isModalActive={isModalActive}
        editTodo={editTodo}
        setCurrentTodo={setCurrentTodo}
      />
    </>
  );
};

export { TaskPane };
