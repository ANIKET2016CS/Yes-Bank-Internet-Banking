import React, { useState } from "react";
import "./admin-login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AdminLogin = ({ setLoginUser }) => {
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
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <>
      <div className="login">
        <h1>Admin Login</h1>
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
      </div>
    </>
  );
};

export default AdminLogin;
