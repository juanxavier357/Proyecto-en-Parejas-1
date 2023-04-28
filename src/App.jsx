import { useState } from "react";
import NavBar from "./components/NavBar/NavBar"
import CrudApi from "./components/CrudApi";
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
