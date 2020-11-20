import React from 'react';
import Form from '../Form';

function Registartion() {
    return (
        <Form name='Регистрация'>
            <div className="formItems">
          <div className="inputBlock">
            <label className="inputName">Имя</label>
            <input
              type="text"
              className="inp"
            ></input>
          </div>
          <div className="inputBlock">
            <label className="inputName">Фамилия</label>
            <input
              type="text"
              className="inp"
            ></input>
          </div>
          <div className="inputBlock">
            <label className="inputName">Никнейм</label>
            <input
              type="text"
              className="inp"
            ></input>
          </div>
          <button className="formBtn">
            Внести
          </button>
          <button className="formBtn">
            Снять
          </button>
        </div>
        </Form>
    )
}

export default Registartion
