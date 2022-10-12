import React, { useState, useEffect } from 'react'
import "./user-details.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {deleteUser, loadUsers } from '../../redux/actions';

const UserDetails = () => {
    let history = useHistory();
    let dispatch = useDispatch();

    const { users } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUsers());
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to Delete User?")) {
            dispatch(deleteUser(id));
        }
    }

    const [query, setQuery] = useState("");

    const search = (data) => {
        return data.filter(
            (item) => 
            item.userName.toLowerCase().includes(query)
        ); 
    }


    return (
        <div className="userpage">
            <h1 className="centered-content" style={{ fontWeight: "bold" }}>All The User Details List </h1> <br></br>
            <button className="btn btn-success" variant="contained" style={{ marginTop: -10, marginLeft: 1 }} onClick={() => { history.push("/buy-ticket") }}>Buy Ticket</button><br></br>
            <div className="container">
            <input type="text" className="search" onChange={(e) => setQuery(e.target.value)} placeholder="Search User Name (In lowecase)" style={{width: "400px", marginLeft: 320, fontWeight: "bold", textAlign: "center", borderRadius: "15px", backgroundColor: "#f47443", marginBottom: 10}}/>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col" align="center">User Name</th>
                            <th scope="col" align="center">User Selected Movie</th>
                            <th scope="col" align="center">Movie Id</th>
                            <th scope="col" align="center">Movie Description</th>
                            <th scope="col" align="center">Review(in *)</th>
                            <th scope="col" align="center">Show Timing</th>
                            <th scope="col" align="center" className="btn1"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.filter((user) => user.userName.toLowerCase().includes(query)).map((user) => (
                            <tr>
                                <th scope="row" data={search(users)}>{user.userName}</th>
                                <td >{user.userSelectedMovie}</td>
                                <td >{user.movieRegNo}</td>
                                <td>{user.movieDesc}</td>
                                <td>{user.movieReview}</td>
                                <td>{user.movieShowTiming}</td>
                                <td className="btn2">
                                    <button type="button" className="btn btn-success" onClick={() => history.push(`/edit-UserTicket/${user.id}`)}>Update</button> &nbsp;
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger" style={{ marginLeft: -8, marginTop: 5 }} onClick={() => { history.push("/") }}>Cancel</button>
        </div>
    )
}

export default UserDetails
