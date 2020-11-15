import React from "react";
import Autorization from "./components/pages/Autorization";
import Home from "./components/pages/Home";

function App() {
  const authData = localStorage.getItem("authData");

  return (
    <div>{!authData ? <Autorization /> : <Home authData={authData} />}</div>
  );
}

export default App;
