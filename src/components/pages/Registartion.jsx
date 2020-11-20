import React, { useState } from "react";
import axios from "axios";

import Form from "../Form";

function Registartion() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [warning, setWarning] = useState({
    info: "",
    status: false,
  });

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    if (password !== repeatPassword) {
      setWarning({
        info: "Пароли не совпадают!",
        status: true,
      });
      return;
    }

    axios
      .get(`http://localhost:3001/users?password=${password}`)
      .then((res) => {
        if (res.data[0]) {
          setWarning({
            info: "Пользователь c таким паролем уже существует!",
            status: true,
          });
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
            });
        }
      });
  };

  return (
    <Form name="Регистрация">
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
        <div className="inputBlock">
          <label className="inputName">Повторите пароль</label>
          <input
            type="password"
            className="inp"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></input>
        </div>
        <button className="formBtn" onClick={handleSubmit}>
          Зарегистрироваться
        </button>
      </div>
    </Form>
  );
}

export default Registartion;
