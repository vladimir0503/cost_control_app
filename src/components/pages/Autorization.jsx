import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import axios from "axios";
import Form from "../Form";

function Autorization() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState({
    info: "",
    status: false,
  });

  const handleSubmit = () => {
    if (name === "" || password === "") {
      setWarning({
        info: "Не заполненны поля!",
        status: true,
      });
      return;
    }

    axios
      .get(`http://localhost:3001/users?userName=${name}&password=${password}`)
      .then((res) => {
        if (!res.data[0]) {
          setWarning({
            info: "Неверное имя пользователя или пароль!",
            status: true,
          });
        } else {
          const authData = {
            userName: name,
            userPassword: password,
            newSession: true,
          };

          localStorage.setItem("authData", JSON.stringify(authData));

          setName("");
          setPassword("");
          document.location.reload();
        }
      });
  };

  return (
    <Form name="Авторизация">
      <div className={warning.status ? "warningOn" : "warningOff"}>
        <h4>{warning.info}</h4>
      </div>
      <div className="formItems">
        <div className="inputBlock">
          <label className="inputName">Имя</label>
          <input
            type="text"
            className="inp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="inputBlock">
          <label className="inputName">Пароль</label>
          <input
            type="password"
            className="inp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className="formBtn" onClick={handleSubmit}>
          Войти
        </button>
        <Link to="/registration">
          <button className="formBtn">Регистрация</button>
        </Link>
      </div>
    </Form>
  );
}

export default Autorization;
