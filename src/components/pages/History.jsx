import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearHistory } from "../../redux/actions/history";
import Form from "../Form";

function History() {
  const historyArr = useSelector((state) => state.history);

  const dispatch = useDispatch();

  console.log(historyArr);

  const handleClearHistory = () => {
    if (window.confirm("Вы уверенны?")) {
      dispatch(clearHistory());
    }
  };

  return (
    <div className="operationBlock">
      <Form name="История операций">
        <div className="formItems">
          <div className={historyArr ? "historyFull" : "historyEmpty"}>
            {!historyArr ? (
              <div>
                <h2>Операций не проводилось :(</h2>
              </div>
            ) : (
                historyArr.map((opr, index) => (
                  <li key={`${index}_${opr.date}`} className="historyItem">
                    <p>
                      Дата операции: <strong>{opr.date}</strong>
                    </p>
                    <p>
                      Сумма операции: <strong>{opr.sum}</strong>
                    </p>
                    <p>
                      Комментарий: <strong>{opr.comment}</strong>
                    </p>
                  </li>
                ))
              )}
          </div>
          <button onClick={handleClearHistory} className="btn">
            Отчистить историю
          </button>
          <Link to="/cost_control_app">
            <button className="btn">Вернутся на главную</button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default History;
