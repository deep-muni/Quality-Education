import React, {useEffect, useState} from 'react';
import Axios from "axios";
import urlModifier from "../helper/urlModifier";

const Material = () => {

    const [material, setMaterial] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Axios.get(urlModifier() + "material/getmaterial");
            setMaterial(data.data.material);
        };
        document.title = "Study Material";
        fetchData();
    }, [])

    return (
        <div className="material">
            {
                material.map((material, index) => {
                    return (
                        <div className="material__section" key={index}>
                            <div className="material__title">{material.title}</div>
                            <div className="material__subject"><span>Subject: </span>{material.subject}</div>
                            <div className="material__video">
                                <iframe width="560" height="315" src={material.url} frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Material;
