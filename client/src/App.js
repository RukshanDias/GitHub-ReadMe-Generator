import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Generate from "./Pages/Generate";
import MarkdownContext from "./context/MarkdownContext";

const App = () => {
    const [responseData, setResponseData] = useState(null);
    return (
        <MarkdownContext.Provider value={{ responseData, setResponseData }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/generate" element={<Generate />} />
                </Routes>
            </BrowserRouter>
        </MarkdownContext.Provider>
    );
};

export default App;
