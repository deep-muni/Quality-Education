import React, {useEffect} from 'react';

const UserHome = () => {

    useEffect(() => {
        document.title = "Home Page"
    }, [])

    return (
        <div>
            I am Home
        </div>
    );
};

export default UserHome;
