import { Header } from "../../components";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="auto-container">
        <form className="flex-column gap-1 form-style">
          <h1>LOGIN</h1>
          <label htmlFor="email" className="flex-column gap-1">
            EMAIL
            <input
              type="email"
              name="email"
              id="email"
              className="input input-secondary"
            />
          </label>

          <label htmlFor="password" className="flex-column gap-1">
            PASSWORD
            <input
              type="password"
              name="password"
              id="password"
              className="input input-secondary"
            />
          </label>
          <button className="btn btn-secondary" type="submit">
            LOGIN
          </button>
          <button className="btn btn-secondary">FILL TEST CREDENTIALS</button>
        </form>
      </div>
    </div>
  );
};

export { Login };
