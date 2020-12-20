import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSum, removeSum } from "../../redux/actions/totalSum";
import { newOperation } from "../../redux/actions/history";
import Form from "../Form";

function NewOperation() {
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");
  const [info, setInfo] = useState({
    text: "",
    status: false,
  });

  const { total, isReffil } = useSelector((state) => state);
  const dispatch = useDispatch();

  const currentDate = new Date().toLocaleDateString();
  let timer;

  const createNewOperation = (sum, comment, date) => ({
    sum,
    comment,
    date: date,
  });

  const clearInputs = () => {
    setSum("");
    setComment("");
  };

  const createInfo = (text) => {
    setInfo({ text, status: true });
    timer = setTimeout(() => setInfo({ text, status: false }), 2000);
  };

  const handeAddSum = () => {
    if (sum === "") {
      createInfo("Введите сумму!");
      return;
    }
    dispatch(addSum(+sum));
    dispatch(newOperation(createNewOperation(`+${sum}`, comment, currentDate)));
    createInfo(`Вы внесли ${sum} р.`);
    clearInputs();
  };

  const handeRemoveSum = () => {
    if (sum === "") {
      createInfo("Введите сумму!");
      return;
    } else if (+sum > total) {
      createInfo("На счету не достаточно средств!");
      return;
    } else {
      dispatch(removeSum(+sum));
      dispatch(
        newOperation(createNewOperation(`-${sum}`, comment, currentDate))
      );
      createInfo(`Вы сняли ${sum} р.`);
      clearInputs();
    }
  };

  useEffect(() => {
    clearTimeout(timer);
  });

  return (
    <div className="operationBlock">
      <Form name="Новая операция">
        <div className={info.status ? "infoOn" : "infoOff"}>
          <h4 style={{ color: isReffil ? "green" : "" }}>{info.text}</h4>
        </div>
        <div className="formItems">
          <div className="inputBlock">
            <label className="inputName">Сумма</label>
            <input
              type="number"
              className="inp"
              value={sum}
              onChange={(e) => setSum(e.target.value)}
            ></input>
          </div>
          <div className="inputBlock">
            <label className="inputName">Комментарий</label>
            <textarea
              className="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handeAddSum} className="btn">
            Внести
          </button>
          <button onClick={handeRemoveSum} className="btn">
            Снять
          </button>
        </div>
      </Form>
    </div>
  );
}

export default NewOperation;
