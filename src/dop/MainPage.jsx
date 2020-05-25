import React from "react";
import Layout from "./Layout";

const MainPage = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-8 col-sm-8 col-md-8">
          <Layout />
          <h2> Инструкция для использования программы</h2>
          <hr />
          <h4>1. Войти профиль через меню Авторизация </h4>
          <h4>2. Проверить данные профиля в разделе Страница пользователя </h4>
          <h4>3. Удалить данные кнопкой Удалить профиль </h4>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
