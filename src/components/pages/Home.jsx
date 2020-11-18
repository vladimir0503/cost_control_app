import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { loadUser, addSum, removeSum, newOperation } from "../../redux/actions";
import Header from "../Header";
import NewOperation from "./NewOperation";

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
      });
  }, []);

  const handleAddSum = (sum) => {
    console.log(sum);
    dispatch(addSum(sum));
  };

  const handleRemoveSum = (sum) => {
    console.log(sum);
    dispatch(removeSum(sum));
  };

  const handleNewOperation = (obj) => {
    console.log(obj);
    dispatch(newOperation(obj));
  };

  return (
    <div>
      <Header user={user} total={total} history={history} />
      <NewOperation
        history={history}
        reffil={isReffil}
        onAddSum={handleAddSum}
        onRemoveSum={handleRemoveSum}
        onNewOperation={handleNewOperation}
      />
    </div>
  );
}

export default Home;
