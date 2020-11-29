import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { loadUser } from "../../redux/actions/loadUser";
import Header from "../Header";
import NewOperation from "./NewOperation";
import History from "./History";

function Home({ authData }) {
  const [greeting, setGreeting] = useState(true);
  const [timesOfDay, setTimesOfDay] = useState(null);

  const { userName, userPassword } = JSON.parse(authData);
  const { user, total, history } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTimesOfDay = () => {
    let hour = new Date().getHours();
    const nigth = [0, 1, 2, 3, 4];
    const morning = [5, 6, 7, 8, 9, 10, 11]
    const day = [12, 13, 14, 15, 16];

    if (nigth.includes(hour)) {
      setTimesOfDay('Доброй ночи')
    } else if (morning.includes(hour)) {
      setTimesOfDay('Доброе утро')
    } else if (day.includes(hour)) {
      setTimesOfDay('Добрый день')
    } else {
      setTimesOfDay('Добрый вечер')
    }
  };

  useEffect(() => {
    getTimesOfDay();

    axios
      .get(
        `http://localhost:3001/users?userName=${userName}&password=${userPassword}`
      )
      .then((res) => {
        dispatch(loadUser(res.data[0]));
        console.log(res.data[0]);
      });
    setTimeout(() => setGreeting(!greeting), 2000);
  }, []);

  return (
    <>
      <div className={greeting ? "helloScreenOn" : "helloScreenOff"}>
        <h1>{`${timesOfDay}, ${user.userName}!`}</h1>
      </div>
      <div>
        <Header user={user} total={total} history={history} />
        <Route path="/" component={NewOperation} exact />
        <Route path="/history" component={History} exact />
      </div>
    </>
  );
}

export default Home;
