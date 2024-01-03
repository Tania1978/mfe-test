import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//mount function to start the app
const mount = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

//dev mode, render immediately

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#react-render");
  if (el) {
    mount(el);
  }
}

//running through container, export the mount function
export { mount };
