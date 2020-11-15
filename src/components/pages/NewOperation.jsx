import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Form from "../Form";

function NewOperation({ onAddSum, onRemoveSum, onNewOperation }) {
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");

  const addSum = () => {
    onAddSum(+sum);
    onNewOperation({
      sum: `+${sum}`,
      comment,
      date: new Date().toLocaleDateString(),
    });
    setSum("");
    setComment("");
  };

  const removeSum = () => {
    onRemoveSum(+sum);
    onNewOperation({
      sum: `-${sum}`,
      comment,
      date: new Date().toLocaleDateString(),
    });
    setSum("");
    setComment("");
  };

  return (
    <div className="operationBlock">
      <Form name="Новая операция">
        <div className="formItems">
          <div className="inputBlock">
            <label className="inputName">Сумма</label>
            <input
              type="number"
              className="authInp"
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
          <button onClick={addSum} className="formBtn">
            Внести
          </button>
          <button onClick={removeSum} className="formBtn">
            Снять
          </button>
        </div>
      </Form>
    </div>
  );
}

export default NewOperation;
