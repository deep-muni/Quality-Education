import React, {useEffect} from 'react';

const Volunteer = () => {

    useEffect(() => {
        document.title = "Volunteer"
    }, [])

    return (
        <div>
            I am Volunteer
        </div>
    );
};

export default Volunteer;
