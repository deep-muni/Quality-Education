import React from 'react';

const Administrator = () => {
    return (
        <div>
            {console.log(window.localStorage.getItem("email"))}
            {console.log(window.localStorage.getItem("userType"))}
        </div>
    );
};

export default Administrator;
