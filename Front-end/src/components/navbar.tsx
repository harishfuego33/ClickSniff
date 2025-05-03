import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../routes/auth";

const Navbar = () => {
  const Navigate = useNavigate();
  const path = window.location.pathname;
  const currPath = path.split("/")[1];
  return (
    <nav className="main-navbar">
      <div className="nav-link" onClick={() => Navigate("/")}>
        <div className="logo-container">
          <FontAwesomeIcon
            icon={faSearchengin}
            color="white"
            className="logo"
          />
        </div>
        <h1>suspicious url detector</h1>
      </div>
      {isAuthenticated() ? (
        <div className="nav-buttons">
          {currPath != "login" && (
            <button className="button" onClick={() => Navigate("/login")}>
              Log out
            </button>
          )}
          {currPath != "signup" && (
            <button className="button" onClick={() => Navigate("/signup")}>
              Signup
            </button>
          )}
        </div>
      ) : (
        <div className="nav-buttons">
          {currPath != "login" && (
            <button className="button" onClick={() => Navigate("/login")}>
              Login
            </button>
          )}
          {currPath != "signup" && (
            <button className="button" onClick={() => Navigate("/signup")}>
              Signup
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
