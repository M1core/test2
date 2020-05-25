import React from "react";
import Layout from "./Layout";

const ProfilePage = () => (
  <div>
    <Layout />
    <div>
      <h1>Данные пользователя</h1>
    </div>
    <div>
      <h4>Login: {localStorage.getItem("login")}</h4>
    </div>
    <div>
      <h4> Password: {localStorage.getItem("password")}</h4>
    </div>
    <div>Если в поле пароль стоит " " значит пароль не был введен</div>
  </div>
);

export default ProfilePage;
