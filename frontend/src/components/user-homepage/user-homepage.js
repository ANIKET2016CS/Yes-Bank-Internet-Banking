import React, { useEffect, useState } from "react";
import "./user-homepage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../../redux/actions";

const UserHomePage = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers(""));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete User?")) {
      dispatch(deleteUser(id));
    }
  };

  const [query, setQuery] = useState("");

  return (
    <div className="user-homepage">
      <h1
        className="centered-content"
        style={{ marginTop: 35, fontWeight: "bold" }}
      >
        Profile Page
      </h1>
      <br/><br/>
      <button
        className="btn btn-success"
        variant="contained"
        style={{ marginTop: -37, marginLeft: -330 }}
        onClick={() => {
          history.push("/my-profile");
        }}
      >
        My Profile
      </button>
      <button
        className="btn btn-success"
        variant="contained"
        style={{ marginTop: -37, marginLeft: -20 }}
        onClick={() => {
          history.push("/fund-transfer");
        }}
      >
        Fund Transfer
      </button>
      <br></br>

      <button
        className="btn btn-success"
        variant="contained"
        style={{ marginTop: -62, marginRight: -350 }}
        onClick={() => {
          history.push("/withdraw");
        }}
      >
        Withdraw Amount
      </button>
      <br></br>

      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" align="center">
                User Id
              </th>
              <th scope="col" align="center">
                User Name
              </th>
              <th scope="col" align="center">
                User Password
              </th>
              <th scope="col" align="center">
                User Email
              </th>
              <th scope="col" align="center" className="btn1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Action
              </th>
            </tr>
          </thead>
          <tbody>
            
            {users &&
              users.map((user) => (
                  <tr key={user.id}>
                    <th scope="row" >
                      {user.userId}
                    </th>
                    <td>{user.userName}</td>
                    <td>{user.userPassword}</td>
                    <td>{user.userEmail}</td>
                    <td className="btn2">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => history.push(`/edit-user-profile/${user.id}`)}
                      >
                        Update
                      </button>{" "}
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-success"
        style={{ marginRight: 30 }}
        onClick={() => history.push("/login")}
      >
        Logout
      </button>
    </div>
  );
};

export default UserHomePage;
