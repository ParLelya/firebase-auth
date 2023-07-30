import React from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Аутентификация с Firebase API</h1>
      <Login />
      <Registration />
    </div>
  );
}

export default App;
