import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./fund-transfer.css";

const FundTransfer = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    debitFrom: "",
    payeeAccountNumber: "",
    yourBalance: "",
    amountToBeTransfer: "",
  });

  const [error, setError] = useState("");

  const { debitFrom, payeeAccountNumber, yourBalance, amountToBeTransfer } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!debitFrom || !payeeAccountNumber || !yourBalance || !amountToBeTransfer) {
      setError("Please input all the input field");
    } else {
      dispatch(addUser(state));
      history.push("/user-homepage");
      setError("");
    }
  };

  return (
    <div className="centered-content fundtransferpage">
      <div className="modal-box form-group">
        <br></br>
        <h1
          className="title"
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}
        >
          Fund Transfer
        </h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control has-background-light"
            name="debitFrom"
            placeholder="Debit From"
            value={debitFrom}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="payeeAccountNumber"
            placeholder="Payee Account Number"
            value={payeeAccountNumber}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="yourBalance"
            placeholder="Your Balance"
            value={yourBalance}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="amountToBeTransfer"
            placeholder="Amount To Be Transfer"
            value={amountToBeTransfer}
            onChange={handleInputChange}
          />
          <br></br>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/user-homepage");
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" style={{ marginLeft: 200 }}>
            Fund Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundTransfer;
