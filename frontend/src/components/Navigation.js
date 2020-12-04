import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";

const Navigation = (props) => {

    const [type, setType] = useState(Boolean);

    useEffect(() => {
        if (window.localStorage.getItem("userType") === "student") {
            setType(false);
        } else if (window.localStorage.getItem("userType") === "volunteer") {
            setType(true);
        }
    }, [type])

    return (
        <div className="navigation">
            <Link to={`${props.u}`}>
                <div className="navigation__welcome">
                    <span>{window.localStorage.getItem("fullName")}</span>
                </div>
            </Link>
            <div className="navigation__navigate">
                <Link to={`${props.u}/profile`}>Profile</Link>
                <Link to={`${props.u}/material`}>Study Material</Link>
                {type && <Link to={`${props.u}/volunteer`}>Volunteer</Link>}
                <Link onClick={() => window.localStorage.clear()} to={"/"}>Logout</Link>
            </div>
        </div>
    );
};

export default withRouter(Navigation);
