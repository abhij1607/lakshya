import "./homepage.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TaskModal, PomodoroPane, AddButton, Header } from "../../components";
import { TaskPane } from "./taskpane/taskpane";

import { useAuth } from "../../context/auth-context";
import { updateUserDetails } from "../../firebase/firestore-requests";

const initialTodo = { estPomodoro: 1, completedPomodoro: 0 };

const Homepage = () => {
  const { userDispatch, userState } = useAuth();
  const [todo, setTodo] = useState(initialTodo);
  const [todosList, setTodosList] = useState(userState.todoList);
  const [currentTodo, setCurrentTodo] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    setTodosList(userState.todoList);
  }, [userState.userToken]);

  useEffect(() => {
    updateUserDetails(
      userState.userToken,
      { todoList: todosList },
      userDispatch
    );
  }, [todosList]);

  const addTodo = (todo) => {
    setTodosList([...todosList, { ...todo, id: uuid() }]);
    setIsModalActive((prev) => !prev);
    setTodo(initialTodo);
  };

  const updateTodo = (todo) => {
    setTodosList((previous) =>
      previous.map((item) => (item.id === todo.id ? todo : item))
    );
    setIsModalActive((prev) => !prev);
    setTodo(initialTodo);
  };

  const editTodo = (todo) => {
    setTodo(todo);
    setIsModalActive((prev) => !prev);
  };

  const deleteTodo = (todo) => {
    setTodosList((previous) => previous.filter((item) => item.id !== todo.id));
    setIsModalActive((prev) => !prev);
    setTodo(initialTodo);
  };

  const cancelTodo = () => {
    setIsModalActive((prev) => !prev);
    setTodo(initialTodo);
  };

  const modalToggle = () => {
    setIsModalActive((prev) => !prev);
  };
  return (
    <div className="home-wrapper">
      <Header />
      <div className="auto-container">
        <main className="flex-column align-center gap-2">
          <PomodoroPane />
          <TaskPane
            todosList={todosList}
            editTodo={editTodo}
            isModalActive={isModalActive}
            setCurrentTodo={setCurrentTodo}
            currentTodo={currentTodo}
          />
          {!isModalActive && <AddButton modalToggle={modalToggle} />}

          {isModalActive && (
            <TaskModal
              todo={todo}
              setTodo={setTodo}
              todosList={todosList}
              setTodosList={setTodosList}
              addTodo={addTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              cancelTodo={cancelTodo}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export { Homepage };
