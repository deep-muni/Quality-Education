import React, {useEffect} from 'react';
import {useHistory, withRouter} from "react-router-dom";
import validate from "../helper/validation";

const Main = () => {

    const history = useHistory();

    useEffect(() => {
        checkUser();
    })

    const checkUser = () => {
        console.log(window.localStorage.getItem("email"));
        if (window.localStorage.getItem("email") !== null) {
            history.push('/home');
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/register')}>Register</button>
        </div>
    );
};

export default withRouter(Main);
