import React, {useEffect, useState} from 'react';
import {useHistory, withRouter} from "react-router-dom";
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import validate from "../helper/validation";

const Volunteer = () => {

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
        document.title = "Volunteer"
        fetchData();
        setErrors(validate(input, initial, 'volunteer'));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Fill the details");
        } else {
            if (Object.keys(errors).length === 0) {
                setResult("");
                const Material = {
                    url: input.url,
                    title: input.title,
                    subject: input.subject,
                }

                await Axios.post(urlModifier() + "material/addmaterial", Material)
                    .then(res => {
                        if (res.data.status) {
                            setResult("Material Added");
                            alert("Material Added");
                            history.push('/home');
                        } else {
                            setResult("Material adding failed");
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
        <div className="volunteer">
            <form className="volunteer__form" onSubmit={handleSubmit}>
                <div className="volunteer__input-section">
                    <label htmlFor="url">URL</label>
                    <input type="text" name="url" className="volunteer__inp"
                           onChange={handleChange} value={input.url || ''}/>
                    {errors.url && (<span className={"volunteer__error"}>{errors.url}</span>)}
                </div>

                <div className="volunteer__input-section">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="volunteer__inp"
                           onChange={handleChange} value={input.title || ''}/>
                    {errors.title && (<span className={"volunteer__error"}>{errors.title}</span>)}
                </div>

                <div className="volunteer__input-section">
                    <label htmlFor="subject">Subject</label>
                    <select className="volunteer__inp" onChange={handleChange} name="subject">
                        <option value="none" disabled selected>---</option>
                        {
                            subject.map((sub, index) => {
                                return (
                                    <option key={index} value={sub}>{sub}</option>
                                );
                            })
                        }
                    </select>
                    {errors.subject && (<span className={"volunteer__error"}>{errors.subject}</span>)}
                </div>

                <div className="volunteer__input-section">
                    {(<span className={"volunteer__mainError"}>{result}</span>)}
                    <button type="submit" className="volunteer__submit">Add Material</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(Volunteer);
