import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./withdraw.css";

const Withdraw = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    debitFrom: "",
    balanceAmount: "",
    withdrawAmount: "",
    remarks: "",
  });

  const [error, setError] = useState("");

  const { debitFrom, balanceAmount, withdrawAmount, remarks } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!debitFrom || !balanceAmount || !withdrawAmount || !remarks) {
      setError("Please input all the input field");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className="centered-content withdrawpage">
      <div className="modal-box form-group">
        <br></br>
        <h1
          className="title"
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}
        >
          Withdraw Amount
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
            name="balanceAmount"
            placeholder="Balance Amount"
            value={balanceAmount}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="withdrawAmount"
            placeholder="Withdraw Amount"
            value={withdrawAmount}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="remarks"
            placeholder="Remarks"
            value={remarks}
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
            Withdraw Amount
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
