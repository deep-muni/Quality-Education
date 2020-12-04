import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navigation">
                <Link to={"/"}>
                    <div className="navigation__welcome">
                        <span>Quality Education</span>
                    </div>
                </Link>
                <div className="navigation__navigate">
                    <Link to={"/scholarship"}>Scholarships</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
