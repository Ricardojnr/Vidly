import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";

import Movies from "./Components/movies";
import NavBar from "./Components/common/navBar";
import Rentals from "./Components/rentals";
import Customers from "./Components/customers";
import NotFound from "./Components/not-found";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginForm";
import RegisterForm from "./Components/registerForm";
import Logout from "./Components/logout";
import ProtectedRoute from "./Components/common/protectedRoute";

import auth from "./services/authService";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <ToastContainer></ToastContainer>
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>

            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <ProtectedRoute path="/movies" component={Movies} />

            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
