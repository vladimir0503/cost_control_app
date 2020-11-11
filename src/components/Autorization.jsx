import React, { useState } from "react";
import axios from "axios";

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

          // localStorage.setItem('newSession', true); // Сделать диспач в компоненте Home, а не сдесь! Тут только проверка!
          // localStorage.setItem('userName', name);
          // localStorage.setItem('userPassword');

          localStorage.setItem("authData", JSON.stringify(authData));

          setName("");
          setPassword("");
          document.location.reload();
        }
      });
  };

  return (
    <div className="contentWrapper">
      <div className="formWrapper">
        <div className="formBlock">
          <div className="formHeader">
            <h3>Авторизация</h3>
          </div>
          <div className={warning.status ? "warningOn" : "warningOff"}>
            <h4>{warning.info}</h4>
          </div>
          <div className="formItems">
            <div className="inputBlock">
              <label className="inputName">Имя</label>
              <input
                type="text"
                className="authInp"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="inputBlock">
              <label className="inputName">Пароль</label>
              <input
                type="password"
                className="authInp"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button className="formBtn" onClick={handleSubmit}>
              Войти
            </button>
            <button className="formBtn">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autorization;
