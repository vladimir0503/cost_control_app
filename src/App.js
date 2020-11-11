import React from "react";
import Autorization from "./components/Autorization";
import Home from "./components/Home";

function App() {
  const authData = localStorage.getItem("authData");

  return (
    <div>{!authData ? <Autorization /> : <Home authData={authData} />}</div>
  );
}

export default App;
