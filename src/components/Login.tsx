import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import AppContext from "../context/AppContext";
import { Logout } from "../Types/types";

const Login: React.FC<Logout> = ({ logout }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const logoutFn = () => {
    dispatch({
      type: "SET_LOG_OUT",
      payload: { name: "", loginTime: undefined },
    });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (logout) {
      logoutFn();
    }
  }, [logout, logoutFn]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOG_IN",
      payload: { name: email, loginTime: new Date() },
    });
    // Handle form submission logic here
    console.log("Logged in");
    navigate("/create-poll", { replace: true });
  };

  return (
    <div className="container mt-4">
      <PageHeader header="Login" />
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 mb-3 border-bottom border-primary rounded">
          <div className="form-group m-3">
            <label>Email:</label>
            <input
              className="form-control input-padding"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group m-3">
            <label>Password:</label>
            <input
              className="form-control input-padding"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-primary m-3" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
