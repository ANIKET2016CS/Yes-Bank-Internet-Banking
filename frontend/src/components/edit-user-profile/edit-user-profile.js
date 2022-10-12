import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../../redux/actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./edit-user-profile.css";

const EditUserProfile = () => {
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
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const { userId, userName, userPassword, userEmail, yourBalance ,payeeAccountNumber } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !userName || !userPassword || !userEmail || !yourBalance || !payeeAccountNumber) {
      setError("Please input all the input field");
    } else {
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className="centered-content edit-user-profile-page">
      <div className="modal-box form-group">
        <br></br>
        <h1 className="title" style={{marginLeft: "33px"}}>Update User Details</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control has-background-light"
            name="userId"
            placeholder="Enter User Id"
            value={userId || ""}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userName"
            placeholder="Enter User Name"
            value={userName || ""}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userPassword"
            placeholder="Enter User Password"
            value={userPassword || ""}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="userEmail"
            placeholder="Enter User Email"
            value={userEmail || ""}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="yourBalance"
            placeholder="Enter User Balance"
            value={yourBalance || ""}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            type="text"
            className="form-control has-background-light"
            name="payeeAccountNumber"
            placeholder="Update Payee Account Number"
            value={payeeAccountNumber || ""}
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
            Update User Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfile;
