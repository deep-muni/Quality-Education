import React, {useEffect} from 'react';
import {useHistory, withRouter} from "react-router-dom";

const Main = () => {

    const history = useHistory();

    useEffect(() => {
        checkUser();
    })

    const checkUser = () => {
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
