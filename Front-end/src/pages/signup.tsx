import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [eyeVisible, setEyeVisible] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/createUser",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <main id="login" className="login">
      <section className="login-section">
        <h1 className="login-heading">SIGN UP</h1>
        <form className="login-form" onSubmit={onFormSubmit}>
          {error && error.length != 0 && (
            <div className="error-container">
              <p className="error-text">Error while login</p>
            </div>
          )}
          <input
            type="text"
            placeholder="First Name"
            className="login-input"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.currentTarget.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="login-input"
            value={lastName}
            onChange={(e) => {
              setLastName(e.currentTarget.value);
            }}
            required
          />
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
              SUBMIT
            </button>
            <span className="forget-password">
              <NavLink to="/">Already have a account?</NavLink>
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};
export default Signup;
