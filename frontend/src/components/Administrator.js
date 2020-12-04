import React, {useEffect, useState} from 'react';
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import '../css/Administrator.css';

const Administrator = () => {

    const [volunteers, setVolunteer] = useState([]);
    const [status, setStatus] = useState(Boolean);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Axios.get(urlModifier() + "admin/getvolunteers");
            setVolunteer(data.data.volunteer);
        };
        document.title = "Administrator";
        fetchData();
    }, [status])

    const handleClick = async (event) => {
        event.preventDefault();

        await Axios.delete(urlModifier() + "admin/activatevolunteer", { params: { email: volunteers[event.target.name].email }})
            .then(data => {
                setStatus(true);
                if(data.status){
                    alert(volunteers[event.target.name].fullName + " is active");
                }else{
                    alert("Issue in activating user");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="administrator">
            <table className="administrator__table">
                <tr>
                    <th>Sr. No.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
                    volunteers.map((volunteer, index) => {
                          return(
                              <tr>
                                  <td>{index + 1}</td>
                                  <td>{volunteer.fullName}</td>
                                  <td>{volunteer.email}</td>
                                  <td><button name={index} onClick={handleClick}>Approve</button></td>
                              </tr>
                          )
                    })
                }
            </table>
        </div>
    );
};

export default Administrator;
