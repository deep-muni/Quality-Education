import React, {useEffect, useState} from 'react';
import '../css/Register.css';
import validate from "../helper/validation";
import Axios from "axios";

const Register = () => {

    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    useEffect(() => {
        setErrors(validate(input, initial));
    }, [input, initial])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (initial) {
            setResult("Fill the form");
        } else {
            if(Object.keys(errors).length === 0){
                setResult("");
                const User = {
                    email: input.email,
                    firstName: input.firstName,
                    lastName: input.lastName,
                    dateOfBirth: input.dateOfBirth,
                    password: input.password
                }

                await Axios.post("http://localhost:5000/user/register", User)
                    .then(res => {
                        console.log(res);
                        if (res.data.status) {
                            setResult("User has been registered");
                        } else {
                            setResult("Username already exist");
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
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__input-section">
                    <label htmlFor="email">User Name</label>
                    <input type="text" name="email" className="register__inp"
                           onChange={handleChange} value={input.email || ''}/>
                    {errors.email && (<p className={"register__error"}>{errors.email}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="register__inp"
                           onChange={handleChange} value={input.firstName || ''}/>
                    {errors.firstName && (<p className={"register__error"}>{errors.firstName}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="register__inp"
                           onChange={handleChange} value={input.lastName || ''}/>
                    {errors.lastName && (<p className={"register__error"}>{errors.lastName}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" name="dateOfBirth" className="register__inp"
                           onChange={handleChange} value={input.dateOfBirth || ''}/>
                    {errors.dateOfBirth && (<p className={"register__error"}>{errors.dateOfBirth}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="register__inp"
                           onChange={handleChange} value={input.password || ''}/>
                    {errors.password && (<p className={"register__error"}>{errors.password}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" className="register__inp"
                           onChange={handleChange} value={input.confirmPassword || ''}/>
                    {errors.confirmPassword && (<p className={"register__error"}>{errors.confirmPassword}</p>)}
                </div>
                <div className="register__input-section">
                    {(<p className={"register__mainError"}>{result}</p>)}
                    <button type="submit" className="register__submit">Register</button>
                </div>
            </form>
            <div className="register__redirect">
                <span>Already a User? </span>
                <a href="http://localhost" className="register__linkLogin"> Login</a>
            </div>
        </div>
    );
};

export default Register;
