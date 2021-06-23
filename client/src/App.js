import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/Layout/Alert";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import AuthState from "./context/auth/AuthState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "../src/utils/SetAuthToken";
import PrivateRoute from "./components/Routing/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
