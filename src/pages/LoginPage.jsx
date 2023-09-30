import React from 'react';
import '../styles/user/AuthPage.css';
import '../styles/common/Page.css';
import "../styles/common/Form.css"
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../features/user/userAPI";
import {Link, Navigate} from "react-router-dom";
import {setCredentials} from "../features/user/userSlice";
import Loading from "../components/common/Loading";
import Success from "../components/common/Success";
import Form from "../components/common/Form";

const LoginPage = () => {

    const dispatch = useDispatch();
    const [login, {isLoading, isSuccess}] = useLoginMutation();

    const token = localStorage.getItem('token');
    if (!!token) return <Navigate to={'../notes'}/> // if logged in
    const submitHandler = async (formData) => {
        try {
            const {token} = await login(formData).unwrap();
            localStorage.setItem('token', token);
            dispatch(setCredentials({token}));
        } catch (e) {
            console.log(e);
        }
    }

    if (isSuccess) return <Navigate to={'../notes'}/>;

    return (
        <div className={'page auth-page'}>
            <Form title={"Welcome back!"} onSubmit={submitHandler}>
                <input type="text" name={"username"} placeholder={"Username"}/>
                <input type="password" name={"password"} placeholder={"Password"}/>
                <p>Don't have an account yet? <Link className={'link'} to={'/note-app/signup'}>Signup now</Link></p>

            </Form>
            {isLoading && <Loading/>}
            {isSuccess && <Success/>}
        </div>
    );
};

export default LoginPage;