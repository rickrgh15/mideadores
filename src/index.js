import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import Header from "./components/header"
import Footer from "./components/footer"

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);