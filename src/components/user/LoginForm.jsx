import React from 'react';
import {login, selectLoginStatus} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import "../../styles/common/Form.css"
import {Link} from "react-router-dom";
import Form from "../common/Form";
import Loading from "../common/Loading";

const LoginForm = () => {
    const dispatch = useDispatch();

    const submitHandler = (formData) => {
        dispatch(login(formData));
    }

    const loginStatus = useSelector(selectLoginStatus);

    return (
        <Form title={"Welcome back!"} onSubmit={submitHandler}>
            <input type="text" name={"username"} placeholder={"Username"}/>
            <input type="password" name={"password"} placeholder={"Password"}/>
            <p>Don't have an account yet? <Link className={'link'} to={'/note-app/signup'}>Signup now</Link></p>
            {loginStatus === 'pending' ? <Loading/> : ''}
        </Form>
    );
};

export default LoginForm;