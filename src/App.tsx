import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { TodoWrapper } from "./components/todowrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoWrapper />
      </header>
    </div>
  );
}

export default App;
