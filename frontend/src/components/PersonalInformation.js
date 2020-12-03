import React, {useEffect} from 'react';

const PersonalInformation = () => {

    useEffect(() => {
        document.title = "Personal Information"
    }, [])

    return (
        <div>
            Personal Information
        </div>
    );
};

export default PersonalInformation;
