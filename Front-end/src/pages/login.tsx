import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../slice/index";
import { commonConstant } from "../constant/commonConstant";
import { loginRequest } from "../slice/authSlicer";

const Login = () => {
  const [eyeVisible, setEyeVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const loginResponse = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    dispatch(loginRequest(userData));
  };

  useEffect(() => {
    console.log(loginResponse);
    if (loginResponse && loginResponse.isSuccess) {
      sessionStorage.setItem(
        commonConstant.authData,
        JSON.stringify(loginResponse.authData)
      );
      navigate("/search");
    }
    if (loginResponse && loginResponse.isFailure) {
      setError("error while login");
    }
  }, [loginResponse, navigate]);
  return (
    <main id="login" className="login">
      <section className="login-section">
        <h1 className="login-heading">LOGIN</h1>
        <form className="login-form" onSubmit={onFormSubmit}>
          {error && error.length != 0 && (
            <div className="error-container">
              <p className="error-text">Error while login</p>
            </div>
          )}
          <div className="login-container">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              required
            />
            <label htmlFor="email" className="input-label text-white">
              Enter the valid mail
            </label>
          </div>
          <div className="password-box">
            <input
              type={!eyeVisible ? "password" : "text"}
              placeholder="Password"
              className="login-input"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              required
            />
            {/* <label htmlFor="email" className="input-label">Enter the valid mail</label> */}
            <span
              onClick={() => {
                setEyeVisible(!eyeVisible);
              }}
              className="eye-button"
            >
              {eyeVisible ? (
                <FaEye color="white" size="15" className="eye-icon" />
              ) : (
                <FaEyeSlash color="white" size="15" className="eye-icon" />
              )}
            </span>
          </div>
          <div className="button-group">
            <button type="submit" className="white-button">
              Submit
            </button>
            <span className="forget-password">
              <NavLink to="/">Forget password?</NavLink>
            </span>
          </div>
          <p className="forget-password text-center">
            create a new account? <NavLink to="/signup">SIGN UP</NavLink>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
