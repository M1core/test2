import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "/main/dop/MainPage";
import SignInPage from "/main/dop/SignInPage";
import ProfilePage from "/main/dop/ProfilePage";
import PrivatRoute from "/main/dop/PrivateRoute";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
