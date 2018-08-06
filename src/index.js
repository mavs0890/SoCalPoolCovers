import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/index"
import Tabs from "./Components/Tabs";
import HomePage from "./Pages/Home/index"

const Index = () => {
  return (
    <div className="application" >
      <Header />
      <Tabs />
      <HomePage />
    </div>
  )};

ReactDOM.render(<Index />, document.getElementById("index"));