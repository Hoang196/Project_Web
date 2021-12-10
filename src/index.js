import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from "./router/router";

ReactDOM.render(
    <BrowserRouter>
        {renderRoutes(router)}
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
