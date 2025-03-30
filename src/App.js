import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

// React element = object => when we render its to DOM then its become html

// JSX - we can write react without JSX

// react functional components

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);
