import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Main from "./Main";
import Scholarship from './Scholarship';
import "../css/Navigation.css";
import "../css/Scholarship.css";
import "../css/Profile.css";
import "../css/Form.css";
import "../css/Material.css";

const Routes = () => {
    return (
        <div className="deep">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path='/register' component={Register}/>
                <Route path="/scholarship" component={Scholarship}/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
            </Switch>
        </div>
    );
};

export default Routes;
