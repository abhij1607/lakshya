import { useEffect, useState } from "react";
import { useTimer } from "../context/timer-context";

const PomodoroPane = () => {
  const { timerState, timerDispatch } = useTimer();
  const {
    pause,
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
    menuOptionActive,
  } = timerState;
  const [timer, setTimer] = useState(pomodoroTimer);

  const tick = () => {
    setTimer(timer - 1);
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
    timerDispatch({ type: "TOGGLE_PAUSE", payload: !pause });
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
    timerDispatch({ type: "TOGGLE_PAUSE", payload: true });
  };

  const shortBreak = () => {
    timerDispatch({
      type: "CHANGE_ACTIVE_MENU_OPTION",
      payload: "Short Break",
    });
    setTimer(shortBreakTimer);
    timerDispatch({ type: "TOGGLE_PAUSE", payload: true });
  };

  const longBreak = () => {
    timerDispatch({ type: "CHANGE_ACTIVE_MENU_OPTION", payload: "Long Break" });
    setTimer(longBreakTimer);
    timerDispatch({ type: "TOGGLE_PAUSE", payload: true });
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
