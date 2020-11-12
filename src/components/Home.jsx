import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { loadUser } from '../redux/actions/loadUser'
import Header from "./Header";
import NewOperation from "./NewOperation";


function Home({ authData }) {
  const user = useSelector((state) => state.items);
  console.log('Redux:', user);

  const dispatch = useDispatch();

  const { userName, userPassword } = JSON.parse(authData);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/users?userName=${userName}&password=${userPassword}`
      )
      .then((res) => {
        dispatch(loadUser(res.data[0]));
      });
  }, []);

  return (
    <div>
      <Header total={user.total} />
      <NewOperation />
    </div>
  );
}

export default Home;
