import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "Main";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main}></Route>
    </BrowserRouter>
  );
};

export default App;
