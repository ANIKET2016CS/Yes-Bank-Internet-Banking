import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const {userId, password } = user;
    if (userId && password) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/user-homepage");
      });
    } else {
      alert("Invalid");
    }
  };

  return (
    <>
      <div className="login">
        <h1>Login to Internet Banking</h1>
        <input
          type="text"
          name="userId"
          value={user.userId}
          onChange={handleChange}
          placeholder="Enter your User Id"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>
          New User
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/admin-login")}>
          Admin Login
        </div>
      </div>
    </>
  );
};

export default Login;
