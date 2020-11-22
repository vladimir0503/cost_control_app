import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSum, removeSum, newOperation } from "../../redux/actions";
import Form from "../Form";

function NewOperation() {
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");

  const { history, isReffil } = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(history);

  const currentSum = !history.length ? 0 : history[history.length - 1].sum;
  const currentDate = new Date().toLocaleDateString();

  const createNewOperation = (sum, comment, date) => ({
    sum,
    comment,
    date: date,
  });

  const handeAddSum = () => {
    if (sum === "") return;
    dispatch(addSum(+sum));
    dispatch(newOperation(createNewOperation(`+${sum}`, comment, currentDate)));
    setSum("");
    setComment("");
  };

  const handeRemoveSum = () => {
    if (sum === "") return;
    dispatch(removeSum(+sum));
    dispatch(newOperation(createNewOperation(`-${sum}`, comment, currentDate)));
    setSum("");
    setComment("");
  };

  return (
    <div className="operationBlock">
      <Form name="Новая операция">
        {/* <div>
          <h4>{currentSum}</h4>
        </div> */}
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
          <button onClick={handeAddSum} className="formBtn">
            Внести
          </button>
          <button onClick={handeRemoveSum} className="formBtn">
            Снять
          </button>
        </div>
      </Form>
    </div>
  );
}

export default NewOperation;
