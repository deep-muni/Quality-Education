import React, {useEffect, useState} from 'react';
import {Link, useHistory, withRouter} from "react-router-dom";
import '../css/Navigation.css';

const Navigation = () => {

    const [type, setType] = useState(Boolean);

    useEffect(() => {
        if (window.localStorage.getItem("userType") === "student") {
            setType(false);
        } else if (window.localStorage.getItem("userType") === "volunteer") {
            setType(true);
        }
    }, [type])

    const history = useHistory();

    const handleLogout = () => {
        window.localStorage.clear();
        history.push('/');
    }

    return (
        <div className="navigation">
            <div className="navigation__welcome">
                <span>{window.localStorage.getItem("fullName")}</span>
            </div>
            <div className="navigation__navigate">
                <Link to={""}>Profile</Link>
                <Link to={""}>Study Material</Link>
                {type && <Link to={""}>Volunteer Panel</Link>}
                <Link onClick={handleLogout} to={""}>Logout</Link>
            </div>
        </div>
    );
};

export default withRouter(Navigation);
