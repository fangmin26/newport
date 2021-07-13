//https://suprecontent.com/creative
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./component/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  );
};

export default App;
