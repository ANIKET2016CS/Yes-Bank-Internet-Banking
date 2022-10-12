import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, userId, email, password, reEnterPassword } = user;
    if (name && userId && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("Invalid");
    }
  };

  return (
    <>
      <div className="register">
        <h1>New User</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="text"
          name="userId"
          value={user.userId}
          onChange={handleChange}
          placeholder="Your User Id as PAN / Aadhar No"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your Password"
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          onChange={handleChange}
          placeholder="Re-enter Your Password"
        />
        <div className="button" onClick={register}>
          Confirm Your Opening
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </>
  );
};

export default Register;
