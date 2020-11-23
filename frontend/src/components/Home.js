import React from 'react';
import Navigation from "./Navigation";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import UserHome from "./UserHome";
import Profile from "./Profile";
import Material from "./Material";
import Volunteer from "./Volunteer";

const Home = () => {

    let { path } = useRouteMatch();

    return (
        <div>
            <Navigation u={path}/>
            <div>
                <Switch>
                    <Route path={`${path}`} exact component={UserHome}/>
                    <Route path={`${path}/profile`} component={Profile}/>
                    <Route path={`${path}/material`} component={Material}/>
                    <Route path={`${path}/volunteer`} component={Volunteer}/>
                </Switch>
            </div>
        </div>
    );
};

export default Home;
