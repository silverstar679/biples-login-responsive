import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as buffer from "buffer";
import Login from "./pages/Login";

window.Buffer = buffer.Buffer;

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" render={() => <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
