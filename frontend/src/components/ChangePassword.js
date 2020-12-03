import React, {useEffect, useState} from 'react';
import { useHistory, withRouter} from "react-router-dom";
import validate from "../helper/validation";
import Axios from "axios";
import urlModifier from "../helper/urlModifier";


const ChangePassword = () => {

    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    const history = useHistory();

    useEffect(() => {
        document.title = "Change Password";
        setErrors(validate(input, initial, 'changePassword'));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Password not entered");
        } else {
            if(Object.keys(errors).length === 0){
                setResult("");
                const User = {
                    email: window.localStorage.getItem("email"),
                    password: input.password
                }

                await Axios.put(urlModifier() + "user/updatepassword", User)
                    .then(res => {
                        if (res.data.status) {
                            setResult("Password changed successfully.");
                            alert("Password changed successfully.");
                            history.push('/home');
                        } else {
                            setResult("Password not changed.");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }else{
                setResult("Errors in form");
            }
        }
    };

    const handleChange = (event) => {
        setInput(input => ({...input, [event.target.name]: event.target.value}));
        setInitial(false);
    }

    return (
        <div className="changePassword">
            <form className="changePassword__form" onSubmit={handleSubmit}>
                <div className="changePassword__input-section">
                    <span htmlFor="password">Password</span>
                    <input type="password" name="password" className="changePassword__inp"
                           onChange={handleChange} value={input.password || ''}/>
                    {errors.password && (<span className={"changePassword__error"}>{errors.password}</span>)}
                </div>

                <div className="changePassword__input-section">
                    <span htmlFor="confirmPassword">Confirm Password</span>
                    <input type="password" name="confirmPassword" className="changePassword__inp"
                           onChange={handleChange} value={input.confirmPassword || ''}/>
                    {errors.confirmPassword && (<span className={"changePassword__error"}>{errors.confirmPassword}</span>)}
                </div>

                <div className="changePassword__input-section">
                    {(<span className={"changePassword__mainError"}>{result}</span>)}
                    <button type="submit" className="changePassword__submit">Change Password</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(ChangePassword);
