import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [eyeVisible, setEyeVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    x``;
  };
  return (
    <main id="login" className="login">
      <section className="login-section">
        <h1 className="login-heading">LOGIN</h1>
        <form className="login-form" onSubmit={onFormSubmit}>
          {error.length != 0 && (
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
