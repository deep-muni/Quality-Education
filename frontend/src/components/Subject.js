import React, {useEffect} from 'react';

const Subject = () => {

    useEffect(() => {
        document.title = "Subject"
    }, [])

    return (
        <div>
            Subject
        </div>
    );
};

export default Subject;
