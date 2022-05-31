import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./store/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Browser routing olacak yani yaptığım site tek sayfalık bir uygulama değil bir web sitesi yapıyoruz.
  // appin içinde ne varsa cart provider ile sarmlalladık.Artık herkes isterse bu stateden faydalanabilecek.
  <CartProvider>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </CartProvider>
);
