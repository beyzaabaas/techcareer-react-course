import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Browser routing olacak yani yaptığım site tek sayfalık bir uygulama değil bir web sitesi yapıyoruz.
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);
