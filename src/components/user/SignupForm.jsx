import React from 'react';
import Form from "../common/Form";
import {useDispatch, useSelector} from "react-redux";
import {selectLoginStatus, signup} from "../../store/userSlice";
import {ReactComponent as LoadingIcon} from '../../assets/icons/loading-icon.svg'
import {Link} from "react-router-dom";

const SignupForm = () => {
    const dispatch = useDispatch();
    const loginStatus = useSelector(selectLoginStatus);

    const submitHandler = (formData) => {
        if (formData.password === formData.confirmPassword) {
            const {username, email, password} = formData;
            const data = {username, email, password};
            dispatch(signup(data));
        }
    }

    return (
        <Form title={"Create account"} onSubmit={submitHandler}>
            <input type="text" name={"username"} placeholder={"Username"}/>
            <input type="email" name={"email"} placeholder={"Email"}/>
            <input type="password" name={"password"} placeholder={"Password"}/>
            <input type="password" name={"confirmPassword"} placeholder={"Confirm password"}/>
            <p>Already have an account? <Link className={'link'} to={'/note-app/login'}>Login now</Link></p>
            {loginStatus === 'pending' ? <div className="loading"><LoadingIcon/></div> : ''}
        </Form>
    );
};

export default SignupForm;