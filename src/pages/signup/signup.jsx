import { useState } from "react";
import { Header } from "../../components";
import { signup } from "../../firebase/firebase-auth";
import { handleFormChange } from "../../utils/handleFormChange";
import "./signup.css";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { fetchUserDetails } from "../../firebase/firestore-requests";

const Signup = () => {
  const initialFormData = {
    displayName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { displayName, email, password } = formData;

  const { userDispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = await signup(formData);
      const todoList = await fetchUserDetails(userId);

      userDispatch({ type: "SIGN_UP", payload: { userId, todoList } });
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
          <h1>SIGNUP</h1>
          <label htmlFor="name" className="flex-column gap-1">
            Name
            <input
              type="name"
              name="displayName"
              id="displayName"
              className="input input-secondary"
              value={displayName}
              onChange={(e) => handleFormChange(e, setFormData)}
            />
          </label>
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
            SIGNUP
          </button>
          <div>
            Create an account <Link to="/login">LOGIN</Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Signup };
