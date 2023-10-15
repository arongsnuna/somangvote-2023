import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import Ban from "./views/components/sections/candidates/ban.jsx";
import Han from "./views/components/sections/candidates/han.jsx";
import Jang from "./views/components/sections/candidates/jang.jsx";
import Ji from "./views/components/sections/candidates/ji.jsx";
import Kim from "./views/components/sections/candidates/kim.jsx";
import Kwon from "./views/components/sections/candidates/kwon.jsx";
import Lee from "./views/components/sections/candidates/lee.jsx";
import PageTable from "./views/components/sections/table";


const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/" element={<Components />} />
      <Route path="/ban" element={<Ban/>} />
      <Route path="/han" element={<Han/>} />
      <Route path="/Jang" element={<Jang />} />
      <Route path="/Ji" element={<Ji/>} />
      <Route path="/Kim" element={<Kim />} />
      <Route path="/Kwon" element={<Kwon />} />
      <Route path="/Lee" element={<Lee />} />
      <Route path="/Candidates" element={<PageTable/>} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
