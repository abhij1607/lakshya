import { EditButton } from "../../../../components";

const TaskList = ({ todosList, isModalActive, editTodo, setCurrentTodo }) => {
  return (
    <>
      {todosList.map((item) => {
        return (
          <div key={item.id} className="flex-row gap-2">
            <div
              className="btn pd-y-base pd-x-base task flex-row"
              onClick={() => setCurrentTodo(item)}
            >
              {item.task}
              <div className="align-right">
                <span className="pd-x-base">{item.estPomodoro}</span>
                <EditButton item={item} editTodo={editTodo} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { TaskList };
