import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/Routes";

function App() {

    return (
        <div className="app">
            <Router>
                <div className="App">
                    <Routes/>
                </div>
            </Router>
        </div>
    );
}

export default App;
