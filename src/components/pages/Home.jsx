import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { loadUser } from '../../redux/actions/loadUser'
import Header from "../Header";
import NewOperation from "./NewOperation";
import History from "./History";

function Home({ authData }) {
  const { userName, userPassword } = JSON.parse(authData);
  const { user, total, history, isReffil } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/users?userName=${userName}&password=${userPassword}`
      )
      .then((res) => {
        dispatch(loadUser(res.data[0]));
        console.log(res.data[0]);
      });
  }, []);

  return (
    <div>
      <Header user={user} total={total} history={history} />
      <Route path="/" component={NewOperation} exact />
      <Route path="/history" component={History} exact />
    </div>
  );
}

export default Home;
