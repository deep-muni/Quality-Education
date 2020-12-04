import React, {useEffect, useState} from 'react';
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import {useHistory, withRouter} from "react-router-dom";
import validate from "../helper/validation";

const Subject = () => {

    const [subject, setSubject] = useState([]);
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const data = await Axios.get(urlModifier() + "admin/getsubjects");
            setSubject(data.data.subjects);
        };
        document.title = "Subject";
        fetchData();
        setErrors(validate(input, initial, 'subject'));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Select a subject");
        } else {
            if (Object.keys(errors).length === 0) {
                setResult("");
                const User = {
                    email: window.localStorage.getItem("email"),
                    subject: input.subject
                }

                await Axios.put(urlModifier() + "user/updatesubject", User)
                    .then(res => {
                        if (res.data.status) {
                            setResult("Subject selected");
                            alert("Subject selected");
                            history.push('/home');
                        } else {
                            setResult("Subject selection failed");
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
        <div className="subject">
            <form className="subject__form" onSubmit={handleSubmit}>
                <div className="subject__input-section">
                    <span htmlFor="subject">Select Subject</span>
                    <select className="subject__inp" onChange={handleChange} name="subject">
                        <option value="none" disabled selected>---</option>
                        {
                            subject.map((sub, index) => {
                                return (
                                    <option key={index} value={sub}>{sub}</option>
                                );
                            })
                        }
                    </select>
                    {errors.subject && (<span className={"subject__error"}>{errors.subject}</span>)}
                </div>
                <div className="subject__input-section">
                    {(<span className={"subject__mainError"}>{result}</span>)}
                    <button type="submit" className="subject__submit">Select Subject</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(Subject);
