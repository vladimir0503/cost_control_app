import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Form from "../Form";

function Autorization() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState({
    text: "",
    status: false,
  });

  let timer;

  const createInfo = (text) => {
    setInfo({ text, status: true });
    timer = setTimeout(() => setInfo({ text, status: false }), 2000);
  };

  const handleSubmit = () => {
    if (name === "" || password === "") {
      createInfo("Не заполненны поля!");
      return;
    }

    axios
      .get(`/users?userName=${name}&password=${password}`)
      .then((res) => {
        if (!res.data[0]) {
          createInfo("Неправильное имя пользователя или пароль!");
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

  useEffect(() => {
    clearTimeout(timer);
  });

  return (
    <Form name="Авторизация">
      <div className={info.status ? "infoOn" : "infoOff"}>
        <h4>{info.text}</h4>
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
        <button className="btn" onClick={handleSubmit}>
          Войти
        </button>
        <Link to="/registration">
          <button className="btn">Регистрация</button>
        </Link>
      </div>
    </Form>
  );
}

export default Autorization;
