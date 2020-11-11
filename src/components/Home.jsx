import React, { useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import NewOperation from "./NewOperation";
import { useSelector } from "react-redux";

function Home({ authData }) {
  const user = useSelector((state) => state.items);

  const { userName, userPassword } = JSON.parse(authData);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/users?userName=${userName}&password=${userPassword}`
      )
      .then((res) => {
        console.log(res.data[0]);
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
