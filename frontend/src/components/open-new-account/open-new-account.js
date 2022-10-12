import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./open-new-account.css";

const OpenNewAccount = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    userId: "",
    userName: "",
    userPassword: "",
    userEmail: "",
    yourBalance: "",
    payeeAccountNumber: ""
  });

  const [error, setError] = useState("");

  const { userId, userName, userPassword, userEmail, yourBalance, payeeAccountNumber } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !userName || !userPassword || !userEmail || !yourBalance ||!payeeAccountNumber) {
      setError("Please input all the input field");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className="centered-content open-new-account-page">
      <div className="modal-box form-group">
        <br></br>
        <h1
          className="title"
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}
        >
          Open New Account
        </h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control has-background-light"
            name="userId"
            placeholder="Enter User Id"
            value={userId}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userName"
            placeholder="Enter User Name"
            value={userName}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userPassword"
            placeholder="Enter User Password"
            value={userPassword}
            onChange={handleInputChange}
          /><br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userEmail"
            placeholder="Enter User Email"
            value={userEmail}
            onChange={handleInputChange}
          /><br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="yourBalance"
            placeholder="Enter User Balance"
            value={yourBalance}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="payeeAccountNumber"
            placeholder="Enter Account Number"
            value={payeeAccountNumber}
            onChange={handleInputChange}
          />
          <br></br>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" style={{ marginLeft: 200 }}>
            Open New Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenNewAccount;
