import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { logOff } from "../redux/actions/logOff";
import { useDispatch, useSelector } from "react-redux";

function Header({ total }) {
  const [activeItem, setActiveItem] = useState(null);

  useSelector((state) => state.newSession);

  const dispatch = useDispatch();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    dispatch(logOff());
    localStorage.clear();
    document.location.reload();
  };

  return (
    <div className="menuWrapper">
      <Menu>
        <Menu.Item header>Мои сбережения: {total} руб.</Menu.Item>
        <Menu.Item
          name="history"
          active={activeItem === "history"}
          onClick={handleItemClick}
        >
          История операций
        </Menu.Item>
        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={handleItemClick}
        >
          Выйти
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
