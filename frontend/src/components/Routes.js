import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Administrator from "./Administrator";
import Home from "./Home";
import Main from "./Main";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/admin' component={Administrator}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </div>
    );
};

export default Routes;
