import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <NavBar />
      <CrudApp />
    </>
  );
}

export default App;
