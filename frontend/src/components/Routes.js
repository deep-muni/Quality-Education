import React from 'react';
import Register from "./Register";
import Login from "./Login";
import {Route, Switch} from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/register' component={Register}/>
                <Route exact path= '/login' component={Login}/>
            </Switch>
        </div>
    );
};

export default Routes;
