import React from "react";
import MarketingApp from "./components/MarketingApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
