import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => (
  <nav>
    <Link to="/">Главная страница</Link>

    <Link to="/sign-in">Авторизация</Link>

    <Link to="/profile">Старница пользователя</Link>

    <Button
      label="Удалить профиль"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
  </nav>
);

const Layout = () => (
  <div>
    <Header />
  </div>
);

export default Layout;
