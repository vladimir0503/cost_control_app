import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Popup from "./Popup";

function Header({ user, total, history }) {
  const logOff = () => {
    axios
      .patch(`https://finance-data-base-default-rtdb.firebaseio.com/users/${user.id}/.json`, {
        userName: user.userName,
        password: user.password,
        total: total,
        history: history,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="headerWrapper">
      <h2 className="savingInfo">Мои сбережения: {total} руб.</h2>
      <Popup popupLogOff={logOff} />
      <div className="savingBlock">
        <Link to="/history">
          <button className="headerBtn">История операций</button>
        </Link>
        <Link to="/">
          <button className="headerBtn" onClick={logOff}>
            Выйти
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
