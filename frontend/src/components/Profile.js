import React, {useEffect, useState} from 'react';
import PersonalInformation from "./PersonalInformation";
import ChangePassword from "./ChangePassword";
import Subject from "./Subject";
import Location from "./Location";

const Profile = () => {

    const [type, setType] = useState(Boolean);
    const [section, setSection] = useState("info");

    useEffect(() => {
        if (window.localStorage.getItem("userType") === "student") {
            setType(false);
        } else if (window.localStorage.getItem("userType") === "volunteer") {
            setType(true);
        }
    }, [type])

    const handleClick = (event) => {
        setSection(event.target.id);
    }

    const showSection = () => {
        if (section === "info") {
            return (
                <PersonalInformation/>
            );
        } else if (section === "password") {
            return (
                <ChangePassword/>
            );
        } else if (section === "subject") {
            return (
                <Subject/>
            );
        } else if (section === "location") {
            return (
                <Location/>
            );
        }
    }

    return (
        <div className="profile">
            <div className="profile__leftPanel">
                <button className="profile__tabs" id="info" onClick={handleClick}>Personal Information</button>
                <button className="profile__tabs" id="password" onClick={handleClick}>Change Password</button>
                {type && <button className="profile__tabs" id="subject" onClick={handleClick}>Subject</button>}
                {type && <button className="profile__tabs" id="location" onClick={handleClick}>Location</button>}
            </div>
            <div className="profile__rightPanel">
                {showSection()}
            </div>
        </div>
    );
};

export default Profile;
