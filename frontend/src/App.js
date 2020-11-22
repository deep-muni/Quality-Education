import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/Routes";
import Navigation from "./components/Navigation";
import Header from './components/Header';

function App() {

    return (
        <div className="app">
            <Router>
                <div className="App">
                    <Header/>
                    <Routes/>
                </div>
            </Router>
        </div>
    );
}

export default App;
