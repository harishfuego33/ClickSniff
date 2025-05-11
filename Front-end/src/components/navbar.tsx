import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../routes/auth";
import { commonConstant } from "../constant/commonConstant";
import { useEffect } from "react";

const Navbar = () => {
  const Navigate = useNavigate();
  const path = window.location.pathname;
  const currPath = path.split("/")[1];

  const logOut = () => {
    sessionStorage.removeItem(commonConstant.authData);
    Navigate("/");
  };

  // useEffect(() => {
  //   const scrollY = () => {
  //     const verticalScroll = window.scrollY || pageYOffset;
  //     console.log(verticalScroll);
  //   };
  //   window.addEventListener("scroll", scrollY);
  //   return () => {
  //     window.removeEventListener("scroll", scrollY);
  //   };
  // }, []);
  return (
    <nav className="main-navbar">
      <div className="nav-link" onClick={() => Navigate("/")}>
        <h1 className="logo-text">suspicious url detector</h1>
      </div>
      {isAuthenticated() ? (
        <div className="nav-buttons">
          {currPath != "login" && (
            <button className="button" onClick={logOut}>
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
