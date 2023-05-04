import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/Filter_Context";
import { CartProvider } from "./context/Cart_Context";
import { AuthProvider } from "./context/authContext";

// import { Auth0Provider } from "@auth0/auth0-react";
// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Auth0Provider
  // domain={domain}
  // clientId={clientId}
  // redirectUri={window.location.origin}>
  <AuthProvider>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </AuthProvider>
  // </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
