import React, {useEffect, useState} from 'react';
import validate from "../helper/validation";
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import {Link, useHistory, withRouter} from "react-router-dom";
import Header from "./Header";

const Login = () => {

    const history = useHistory();

    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    useEffect(() => {
        document.title = "Login"
        setErrors(validate(input, initial, 'login'));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Fill the form");
        } else {
            if (Object.keys(errors).length === 0) {
                setResult("");
                const User = {
                    email: input.email,
                    password: input.password
                }

                await Axios.post(urlModifier() + "user/login", User)
                    .then(res => {
                        if (res.data.status) {
                            setResult("User login successful");
                            if (res.data.username === 'admin') {
                                history.push('/admin');
                            } else {
                                window.localStorage.setItem("fullName", res.data.fullName);
                                window.localStorage.setItem("email", res.data.email);
                                window.localStorage.setItem("userType", res.data.userType);
                                history.push('/home');
                            }
                        } else {
                            setResult("Invalid Credentials");
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
        <div>
           <Header/>
           <div className="login">
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__input-section">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login__inp"
                            onChange={handleChange} value={input.email || ''}/>
                        {errors.email && (<span className={"login__error"}>{errors.email}</span>)}
                    </div>
                    <div className="login__input-section">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login__inp"
                            onChange={handleChange} value={input.password || ''}/>
                        {errors.password && (<span className={"login__error"}>{errors.password}</span>)}
                    </div>
                    <div className="login__input-section">
                        {(<span className={"login__mainError"}>{result}</span>)}
                        <button type="submit" className="login__submit">Login</button>
                    </div>
                </form>
                <div className="login__redirect">
                    <span>Do not have an account? </span>
                    <Link to={"/register"} className="login__link"> Register</Link>
                </div>
            </div>
        </div>

    );
};

export default withRouter(Login);
