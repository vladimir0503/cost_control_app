import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearHistory } from '../../redux/actions/history'
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
                    {!historyArr.length ? <h2>Операций не было(</h2> : historyArr.map((opr) => (
                        <li className='historyItem'>
                            <p>Дата операции: <strong>{opr.date}</strong></p>
                            <p>Сумма операции: <strong>{opr.sum}</strong></p>
                            <p>Комментарий: <strong>{opr.comment}</strong></p>
                        </li>
                    ))}
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
