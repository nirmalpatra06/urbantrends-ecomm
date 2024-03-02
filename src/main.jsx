/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
