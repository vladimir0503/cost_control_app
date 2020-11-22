import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearHistory } from "../../redux/actions";
import Form from "../Form";

function History() {
  const historyArr = useSelector((state) => state.history);

  const dispatch = useDispatch();

  console.log(historyArr);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="operationBlock">
      <Form name="История операций">
        <div className="formItems">
          <ul>
            {historyArr.map((opr) => (
              <li>
                <p>{`Дата операции: ${opr.date}`}</p>
                <p>{`Сумма ${opr.sum}`}</p>
                <p>{`Комментарий: ${opr.comment}`}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleClearHistory} className="formBtn">
            Отчистить историю
          </button>
          <Link to="/">
            <button className="formBtn">Вернутся на главную</button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default History;
