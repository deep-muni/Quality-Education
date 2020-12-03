import React, {useEffect} from 'react';

const Material = () => {

    useEffect(() => {
        document.title = "Study Material";
    }, [])

    return (
        <div>
            I am Study Material
        </div>
    );
};

export default Material;
