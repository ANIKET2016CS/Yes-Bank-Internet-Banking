import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import AdminLogin from "./components/admin-login/admin-login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import OpenNewAccount from "./components/open-new-account/open-new-account";
import FundTransfer from "./components/fund-transfer/fund-transfer"
import EditUserProfile from "./components/edit-user-profile/edit-user-profile";
import UserDetails from "./components/user-details/user-details";
import UserHomePage from "./components/user-homepage/user-homepage";
import Withdraw from "./components/withdraw/withdraw";
import MyProfile from "./components/my-profile/my-profile";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              {user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )}
            </Route>
            <Route exact path="/login">
              <Login setLoginUser={setLoginUser} />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/admin-login">
              <AdminLogin setLoginUser={setLoginUser} />
            </Route>
            <Route exact path="/user-homepage">
              <UserHomePage />
            </Route>
            <Route exact path="/open-new-account" component={OpenNewAccount} />
            <Route exact path="/fund-transfer" component={FundTransfer} />
            <Route exact path="/withdraw" component={Withdraw} />
            <Route exact path="/user-details" component={UserDetails} />
            <Route exact path="/edit-user-profile/:id" component={EditUserProfile} />
            <Route exact path="/my-profile" component={MyProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
