const PomodoroPane = () => {
  return (
    <div className="timer-modal flex-column align-center pd-y-md pd-x-base">
      <div className="flex-row gap-2 align-center timer-header">
        <button className="btn active menu-options">Pomodoro</button>
        <button className="btn menu-options">Short Break</button>
        <button className="btn menu-options">Long Break</button>
      </div>
      <div className="timer-clock align-center">25:00</div>
      <div className="align-center">
        <button className="pd-x-base hide">Restart</button>
        <button className="pd-x-base btn-start btn btn-secondary">START</button>
        <button className="pd-x-base hide">Next</button>
      </div>
    </div>
  );
};

export { PomodoroPane };
