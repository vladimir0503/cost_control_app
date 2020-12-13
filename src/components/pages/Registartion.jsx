import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import Form from "../Form";

function Registartion() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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
    const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    const arrInp = [name, password, repeatPassword];

    for (let val of arrInp) {
      if (val === "") {
        createInfo("Не заполненны поля!");
        return;
      }
    }

    if (password !== repeatPassword) {
      createInfo("Пароли не совпадают!");
      return;
    }

    axios
      .get(`http://localhost:3001/users?password=${password}`)
      .then((res) => {
        if (res.data[0]) {
          createInfo("Пользователь c таким паролем уже существует!");
        } else {
          axios
            .post("http://localhost:3001/users", {
              userName: name,
              password,
              total: 0,
              history: [],
              id,
            })
            .then((res) => {
              console.log(res.data);

              const authData = {
                userName: name,
                userPassword: password,
              };

              localStorage.setItem("authData", JSON.stringify(authData));
              window.history.back();
              setTimeout(() => window.location.reload(), 1000);
            });
        }
      });
  };

  useEffect(() => {
    clearTimeout(timer);
  });

  return (
    <Form name="Регистрация">
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
        <div className="inputBlock">
          <label className="inputName">Повторите пароль</label>
          <input
            type="password"
            className="inp"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></input>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Зарегистрироваться
        </button>
        <Link to='/'>
          <button className="btn">
            Вернуться
          </button>
        </Link>
      </div>
    </Form>
  );
}

export default Registartion;
