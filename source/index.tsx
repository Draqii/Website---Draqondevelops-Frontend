import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import "./index.scss";
import App from "./components/_App/App";

const element = (
    <React.StrictMode> 
        <HashRouter> 
            <App />
        </HashRouter>
    </React.StrictMode>
)

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(element);