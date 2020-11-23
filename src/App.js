import React from "react";
import Autorization from "./components/pages/Autorization";
import StartScreen from "./components/pages/StartScreen";
import Home from "./components/pages/Home";

function App() {
  const authData = localStorage.getItem("authData");

  return (
    <div>{!authData ? <StartScreen /> : <Home authData={authData} />}</div>
  );
}

export default App;
