import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./dop/MainPage";
import SignInPage from "./dop/SignInPage";
import ProfilePage from "./dop/ProfilePage";
import PrivatRoute from "./dop/PrivateRoute";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
