import { createContext, useContext, useReducer } from "react";

const TimerContext = createContext();

const initialState = {
  pomodoroTimer: 1500,
  shortBreakTimer: 300,
  longBreakTimer: 900,
  menuOptionActive: "Pomodoro",
};
const timerReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_POMODORO_TIMER":
      return { ...state, pomodoroTimer: action.payload };

    case "CHANGE_SHORT_BREAK_TIMER":
      return { ...state, shortBreakTimer: action.payload };

    case "CHANGE_LONG_BREAK_TIMER":
      return { ...state, longBreakTimer: action.payload };

    case "CHANGE_ACTIVE_MENU_OPTION":
      return { ...state, menuOptionActive: action.payload };

    default:
      return state;
  }
};

const TimerProvider = ({ children }) => {
  const [timerState, timerDispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider value={{ timerState, timerDispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => useContext(TimerContext);

export { useTimer, TimerProvider };
