import React, { useEffect, useState } from "react";
import "./homepage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../../redux/actions";

const Homepage = ({ setLoginUser }) => {
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

  const search = (data) => {
    return data.filter((item) => item.userName.toLowerCase().includes(query));
  };

  return (
    <div className="homepage">
      <h1
        className="centered-content"
        style={{ marginTop: 15, fontWeight: "bold" }}
      >
        All User Profile
      </h1>
      <br></br>
      <button
        className="btn btn-success"
        variant="contained"
        style={{ marginTop: -17}}
        onClick={() => {
          history.push("/open-new-account");
        }}
      >
        Open New Account
      </button>
      <br></br>
      <div className="container">
        <input
          type="text"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search User Name (In lowecase)"
          style={{
            width: "400px",
            marginLeft: 320,
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "15px",
            backgroundColor: "rgb(255, 204, 224)",
            marginBottom: 20,
          }}
        />
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
              <th scope="col" align="center">
                Balance
              </th>
              <th scope="col" align="center">
                Account Number
              </th>
              <th scope="col" align="center" className="btn1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users
                .filter((user) => user.userName.toLowerCase().includes(query))
                .map((user) => (
                  <tr key={user.id}>
                    <th scope="row" >
                      {user.userId}
                    </th>
                    <td data={search(users)}>{user.userName}</td>
                    <td>{user.userPassword}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.yourBalance}</td>
                    <td>{user.payeeAccountNumber}</td>
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
        onClick={() => setLoginUser({})}
      >
        Logout
      </button>
    </div>
  );
};

export default Homepage;









