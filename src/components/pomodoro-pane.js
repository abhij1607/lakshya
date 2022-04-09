import { useEffect, useState } from "react";

const PomodoroPane = () => {
  const [timer, setTimer] = useState(1500);
  const [pause, setPause] = useState(true);
  const [menuOptionActive, setMenuOptionActive] = useState("Pomodoro");

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

  const startTimer = () => setPause(!pause);

  const reset = () => {
    switch (menuOptionActive) {
      case "Pomodoro":
        return setTimer(1500);
      case "Short Break":
        return setTimer(300);
      case "Long Break":
        return setTimer(900);

      default:
        break;
    }
  };
  const pomodoro = () => {
    setMenuOptionActive("Pomodoro");
    setTimer(1500);
    setPause(true);
  };

  const shortBreak = () => {
    setMenuOptionActive("Short Break");
    setTimer(300);
    setPause(true);
  };

  const longBreak = () => {
    setMenuOptionActive("Long Break");
    setTimer(900);
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
          onClick={startTimer}
        >
          {pause ? "START" : "PAUSE"}
        </button>
        <button className="pd-x-base hide">Next</button>
      </div>
    </div>
  );
};

export { PomodoroPane };
