import { useEffect, useState } from "react";
import { useTimer } from "../context/timer-context";

const PomodoroPane = () => {
  const { timerState, timerDispatch } = useTimer();
  const {
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
    menuOptionActive,
  } = timerState;
  const [timer, setTimer] = useState(pomodoroTimer);
  const [pause, setPause] = useState(true);

  const tick = () => {
    setTimer((prev) => prev - 1);
  };

  useEffect(() => {
    let id;
    if (!pause) {
      id = setInterval(() => {
        tick();
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  });

  const togglePauseTimer = () => {
    setPause((prev) => !prev);
  };

  const reset = () => {
    switch (menuOptionActive) {
      case "Pomodoro":
        return setTimer(pomodoroTimer);
      case "Short Break":
        return setTimer(shortBreakTimer);
      case "Long Break":
        return setTimer(longBreakTimer);

      default:
        break;
    }
  };
  const pomodoro = () => {
    timerDispatch({ type: "CHANGE_ACTIVE_MENU_OPTION", payload: "Pomodoro" });
    setTimer(pomodoroTimer);
    setPause(true);
  };

  const shortBreak = () => {
    timerDispatch({
      type: "CHANGE_ACTIVE_MENU_OPTION",
      payload: "Short Break",
    });
    setTimer(shortBreakTimer);
    setPause(true);
  };

  const longBreak = () => {
    timerDispatch({ type: "CHANGE_ACTIVE_MENU_OPTION", payload: "Long Break" });
    setTimer(longBreakTimer);
    setPause(true);
  };

  const timerFormat = () => {
    let minutes = parseInt(timer / 60, 10)
      .toString()
      .padStart(2, "0");
    let seconds = parseInt(timer % 60, 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  let displayTimer = timerFormat();

  return (
    <div className="timer-modal flex-column align-center pd-y-md pd-x-base">
      <div className="flex-row gap-2 align-center timer-header">
        <button
          className={`btn menu-options ${
            menuOptionActive === "Pomodoro" ? "active" : ""
          }`}
          onClick={pomodoro}
        >
          Pomodoro
        </button>
        <button
          className={`btn menu-options ${
            menuOptionActive === "Short Break" ? "active" : ""
          }`}
          onClick={shortBreak}
        >
          Short Break
        </button>
        <button
          className={`btn menu-options ${
            menuOptionActive === "Long Break" ? "active" : ""
          }`}
          onClick={longBreak}
        >
          Long Break
        </button>
      </div>
      <div className="timer-clock align-center">{displayTimer}</div>
      <div className="flex-row align-center gap-1">
        <button
          className="pd-x-base btn-start btn btn-primary btn-inverse"
          onClick={reset}
        >
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button
          className="pd-x-base btn-start btn btn-primary btn-inverse txt-bold"
          onClick={togglePauseTimer}
        >
          {pause ? "START" : "PAUSE"}
        </button>
        <button className="pd-x-base hide">Next</button>
      </div>
    </div>
  );
};

export { PomodoroPane };
