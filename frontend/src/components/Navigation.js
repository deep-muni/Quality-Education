import React from 'react';
import {useHistory, withRouter} from "react-router-dom";

const Navigation = () => {

    const history = useHistory();

    return (
        <div className="navigation">
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/register')}>Register</button>
        </div>
    );
};

export default withRouter(Navigation);
