import React, { useState } from "react";
import Header from "./components/Header";
import Details from "./components/Details";
const App = () => {
  const [show,setShow] =useState(false);
  const [flight,setFlight] =useState(true)

  return (
    <div className="">
      <Header flight={flight} setFlight={setFlight} setShow={setShow} show={show}/>
      <Details show={show} flight={flight}/>
    </div>
  );
};

export default App;
