import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./views/login-page";

const loggedIn = false;

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={loggedIn ? <Navigate to="/articles" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/articles"></Route>
            </Routes>
        </div>
    );
}

export default App;
