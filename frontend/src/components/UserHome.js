import React, {useEffect} from 'react';

const UserHome = () => {

    useEffect(() => {
        document.title = "Home Page"
    }, [])

    return (
        <div className="userHome">
            Welcome {window.localStorage.getItem("fullName")} to Quality Education.
        </div>
    );
};

export default UserHome;
