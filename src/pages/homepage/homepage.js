import "./homepage.css";

const Homepage = () => {
  return (
    <div className="home-wrapper">
      <header className="header pd-x-base">LAKSHYA</header>
      <div className="auto-container">
        <main class="flex-column align-center gap-2">
          <div className="timer-modal flex-column align-center pd-y-md pd-x-base">
            <div className="flex-row gap-2 align-center timer-header">
              <button className="btn active menu-options">Pomodoro</button>
              <button className="btn menu-options">Short Break</button>
              <button className="btn menu-options">Long Break</button>
            </div>
            <div className="timer-clock align-center">25:00</div>
            <div className="align-center">
              <button className="pd-x-base hide">Restart</button>
              <button className="pd-x-base btn-start btn btn-secondary">
                START
              </button>
              <button className="pd-x-base hide">Next</button>
            </div>
          </div>
          <div className="flex-column current-task">
            <h3>#1</h3>
            <div className="flex-row pd-x-base">
              <p> Time to focus</p>
              <button className="align-right">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="flex-column gap-2" id="task-pane">
            <div className="btn pd-y-base task">Task 1</div>
          </div>
          <button className="add-task btn pd-y-base">
            <i className="fa fa-plus pd-x-base"></i>Add Task
          </button>
        </main>
      </div>
    </div>
  );
};
export { Homepage };
