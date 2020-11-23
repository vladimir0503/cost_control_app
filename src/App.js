import React from "react";
<<<<<<< HEAD
import Autorization from "./components/pages/Autorization";
=======
>>>>>>> develop
import StartScreen from "./components/pages/StartScreen";
import Home from "./components/pages/Home";

function App() {
  const authData = localStorage.getItem("authData");

  console.log(authData);

  return (
    <div>{!authData ? <StartScreen /> : <Home authData={authData} />}</div>
  );
}

export default App;
