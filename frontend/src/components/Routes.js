import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Administrator from "./Administrator";
import Home from "./Home";
import Main from "./Main";

const Routes = () => {
    return (
        <div className="deep">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/admin' component={Administrator}/>
                <Route path='/home' component={Home}/>
            </Switch>
        </div>
    );
};

export default Routes;
