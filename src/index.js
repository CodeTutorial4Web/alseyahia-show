import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./assets/css/main.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import AuthContextProvider from "./authContext/AuthContext";


import moment from 'moment';


moment.locale("ar-eg")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>
);
