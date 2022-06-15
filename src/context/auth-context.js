import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialUserState = {
  userToken: localStorage.getItem("userToken"),
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
    case "LOGIN":
      localStorage.setItem("userToken", payload.userId);
      localStorage.setItem("todoList", JSON.stringify(payload.todoList));
      return {
        ...state,
        todoList: payload.todoList,
        userToken: payload.userId,
      };

    case "LOGOUT":
      localStorage.removeItem("userToken");
      localStorage.removeItem("todoList");
      return { ...initialUserState };

    case "UPDATE_TODO_LIST":
      localStorage.setItem("todoList", JSON.stringify(payload));
      return {
        ...state,
        todoList: payload,
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(authReducer, initialUserState);

  return (
    <AuthContext.Provider
      value={{
        userState,
        userDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
