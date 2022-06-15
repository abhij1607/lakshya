import { useState } from "react";
import { Header } from "../../components";
import { login } from "../../firebase/firebase-auth";
import { handleFormChange } from "../../utils/handleFormChange";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { fetchUserDetails } from "../../firebase/firestore-requests";
import "./login.css";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;

  const { userDispatch } = useAuth();
  const navigate = useNavigate();

  const fillTestCredentials = () => {
    const testCredentials = {
      email: "aa@gmail.com",
      password: "fm6VHgP@@TCZQX9",
    };
    setFormData(testCredentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = await login(formData);
      const todoList = await fetchUserDetails(userId);

      userDispatch({ type: "LOGIN", payload: { userId, todoList } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="auto-container">
        <form className="flex-column gap-1 form-style" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <label htmlFor="email" className="flex-column gap-1">
            EMAIL
            <input
              type="email"
              name="email"
              id="email"
              className="input input-secondary"
              value={email}
              onChange={(e) => handleFormChange(e, setFormData)}
            />
          </label>

          <label htmlFor="password" className="flex-column gap-1">
            PASSWORD
            <input
              type="password"
              name="password"
              id="password"
              className="input input-secondary"
              value={password}
              onChange={(e) => handleFormChange(e, setFormData)}
            />
          </label>
          <button className="btn btn-secondary" type="submit">
            LOGIN
          </button>
          <button className="btn btn-secondary" onClick={fillTestCredentials}>
            FILL TEST CREDENTIALS
          </button>
          <div>
            Create an account <Link to="/signup">SIGNUP</Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
