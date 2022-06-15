import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Header = () => {
  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();
  const handleLogout = () => {
    userDispatch({ type: "LOGOUT" });
  };
  return (
    <header className="header pd-x-base flex-row">
      <Link className="align-left link" to="/">
        LAKSHYA
      </Link>

      {userToken ? (
        <button
          className="align-right pd-x-base btn-start btn btn-primary txt-bold"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link
          className="align-right pd-x-base btn-start btn btn-primary txt-bold"
          to="/login"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export { Header };
