import React, { useState, useEffect } from "react";
import { logOff } from "../redux/actions/logOff";
import { useDispatch, useSelector } from "react-redux";

function Header({ total }) {

  useSelector((state) => state.newSession);

  const dispatch = useDispatch();

  const handeLogOff = () => {
    dispatch(logOff());
    localStorage.clear();
    document.location.reload();
  };

  return (
    <div className="headerWrapper">
      <h2 className='savingInfo'>Мои сбережения: {total} руб.</h2>
      <div className='savingBlock'>
        <button className='headerBtn'>История операций</button>
        <button className='headerBtn' onClick={handeLogOff}>Выйти</button>
      </div>
    </div>
  );
}

export default Header;
