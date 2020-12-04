import React, {useEffect, useState} from 'react';
import Axios from "axios";
import urlModifier from "../helper/urlModifier";

const PersonalInformation = () => {

    const [user, setUser] = useState([]);
    const [type, setType] = useState(Boolean);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Axios.get(urlModifier() + "user/getprofile", {params: {email: window.localStorage.getItem("email")}});
            setUser(data.data.user);
        };
        if (window.localStorage.getItem("userType") === "student") {
            setType(false);
        } else if (window.localStorage.getItem("userType") === "volunteer") {
            setType(true);
        } else if (window.localStorage.getItem("userType") === "admin") {
            setType(true);
        }
        document.title = "Personal Information";
        fetchData();
    }, [])

    const getDateOfBirth = () => {
        if(user.dateOfBirth){
            return user.dateOfBirth.split("T")[0];
        }else{
            return "";
        }
    }

    const getLocation = () => {
        if(user.location){
            return user.location;
        }else{
            return "No location selected";
        }
    }

    const getSubject = () => {
        if(user.subject){
            return user.subject;
        }else{
            return "No subject selected";
        }
    }

    return (
        <div className="information">
            <div><span>Name </span> {(user.firstName + " " + user.lastName) || ""}</div>
            <div><span>Email </span> {user.email || ""}</div>
            <div><span>Gender </span> {user.gender || ""}</div>
            <div><span>Date of Birth </span>{ getDateOfBirth() }</div>
            {type && <div><span>Location </span> { getLocation() }</div>}
            {type && <div><span>Subject </span> { getSubject() }</div>}
        </div>
    );
};

export default PersonalInformation;
