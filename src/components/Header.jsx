import React from "react";
import axios from "axios";

function Header({ user, total, history }) {
  const logOff = () => {
    axios
      .put(`http://localhost:3001/users/${user.id}/`, {
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        total: total,
        history: history,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="headerWrapper">
      <h2 className="savingInfo">Мои сбережения: {total} руб.</h2>
      <div className="savingBlock">
        <button className="headerBtn">История операций</button>
        <button className="headerBtn" onClick={logOff}>
          Выйти
        </button>
      </div>
    </div>
  );
}

export default Header;
