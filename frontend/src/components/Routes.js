import React from 'react';
import Register from "./Register";
import Login from "./Login";
import {Route, Switch} from "react-router-dom";
import About from './About';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/register' component={Register}/>
                <Route exact path= '/login' component={Login}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </div>
    );
};

export default Routes;
