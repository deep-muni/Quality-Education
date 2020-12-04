import React, {useEffect, useState} from 'react';
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import {useHistory, withRouter} from "react-router-dom";
import validate from "../helper/validation";

const Location = () => {

    const [location, setLocation] = useState([]);
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    const history = useHistory();

    useEffect( () => {
        const fetchData = async () => {
            const data = await Axios.get(urlModifier() + "admin/getlocations");
            setLocation(data.data.locations);
        };

        document.title = "Subject";
        fetchData();
        setErrors(validate(input, initial, 'location'));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Select a location");
        } else {
            if (Object.keys(errors).length === 0) {
                setResult("");
                const User = {
                    email: window.localStorage.getItem("email"),
                    location: input.location
                }

                await Axios.put(urlModifier() + "user/updatelocation", User)
                    .then(res => {
                        if (res.data.status) {
                            setResult("Location selected");
                            alert("Location selected");
                            history.push('/home');
                        } else {
                            setResult("Location selection failed");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                setResult("Errors in form");
            }
        }
    };

    const handleChange = (event) => {
        setInput(input => ({...input, [event.target.name]: event.target.value}));
        setInitial(false);
    }

    return (
        <div className="location">
            <form className="location__form" onSubmit={handleSubmit}>
                <div className="location__input-section">
                    <span className="location__label" htmlFor="location">Select Location</span>
                    <select className="location__inp" onChange={handleChange} name="location">
                        <option value="none" disabled selected>---</option>
                        {
                            location.map((sub, index) => {
                                return (
                                    <option key={index} value={sub}>{sub}</option>
                                );
                            })
                        }
                    </select>
                    {errors.location && (<span className={"location__error"}>{errors.location}</span>)}
                </div>
                <div className="location__input-section">
                    {(<span className={"location__mainError"}>{result}</span>)}
                    <button type="submit" className="location__submit">Select Location</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(Location);
