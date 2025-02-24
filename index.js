// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" for React 18
import { Provider } from "react-redux";
import store from "../src/redux/store/store"; // Ensure the correct store path
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
