import React, {useEffect, useState} from 'react';
import '../css/Form.css';
import validate from "../helper/validation";
import Axios from "axios";
import urlModifier from "../helper/urlModifier";
import {Link, useHistory, withRouter} from "react-router-dom";
import Header from './Header';

const Register = () => {

    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [initial, setInitial] = useState(true);
    const [result, setResult] = useState('');

    const history = useHistory();

    useEffect(() => {
        setErrors(validate(input, initial, 'register'));
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
                    gender: input.gender,
                    dateOfBirth: input.dateOfBirth,
                    userType: input.userType,
                    password: input.password
                }

                await Axios.post(urlModifier() + "user/register", User)
                    .then(res => {
                        if (res.data.status) {
                            setResult("User has been registered");
                            alert("User has been registered");
                            history.push('/login');
                        } else {
                            setResult("Email already exist");
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
        <div>
            <Header/>
            <div className="register" style={{marginTop:"1.5vh"}}>
            <div style={{textAlign:"center", marginBottom:"1.5vh"}}>
                    <h3>Registration</h3>
            </div>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__input-section">
                    <label htmlFor="email">Email</label>
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

                <div className="register__input-section register__input-gender">
                    <label htmlFor="lastName">Gender</label>
                    <div className="register__gender">
                        <input type="radio" value="Male" name="gender" onChange={handleChange}/>
                        <span> Male</span>
                    </div>
                    <div className="register__gender">
                        <input type="radio" value="Female" name="gender" onChange={handleChange}/>
                        <span> Female</span>
                    </div>
                    <div className="register__gender">
                        <input type="radio" value="Other" name="gender" onChange={handleChange}/>
                        <span> Other</span>
                    </div>
                    {errors.gender && (<p className={"register__error"}>{errors.gender}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" name="dateOfBirth" className="register__inp"
                           onChange={handleChange} value={input.dateOfBirth || ''}/>
                    {errors.dateOfBirth && (<p className={"register__error"}>{errors.dateOfBirth}</p>)}
                </div>

                <div className="register__input-section">
                    <label htmlFor="dateOfBirth">User Type</label>
                    <select className="register__inp" onChange={handleChange} name="userType">
                        <option value="none" disabled selected> -- </option>
                        <option value="student">Student</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="admin">Administrator</option>
                    </select>
                    {errors.userType && (<p className={"register__error"}>{errors.userType}</p>)}
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
                <Link to={"/login"} className="register__link"> Login</Link>
            </div>
        </div>
        </div>
    );
};

export default withRouter(Register);
