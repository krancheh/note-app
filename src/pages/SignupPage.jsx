import React from 'react';
import {useDispatch} from "react-redux";
import {useSignupMutation} from "../features/user/userAPI";
import {Link, Navigate} from "react-router-dom";
import {setCredentials} from "../features/user/userSlice";
import Loading from "../components/common/Loading";
import Form from "../components/common/Form";

const SignupPage = () => {

    const dispatch = useDispatch();
    const [signup, {isLoading, isSuccess}] = useSignupMutation();

    const token = localStorage.getItem('token');
    if (!!token) return <Navigate to={'../notes'}/> // if logged in

    const submitHandler = async (formData) => {
        if (formData.password === formData.confirmPassword) {
            try {
                const {token} = await signup(formData).unwrap();
                localStorage.setItem('token', token);
                dispatch(setCredentials({token}));
            } catch (e) {
                console.log(e);
            }
        }
    }

    if (isSuccess) return <Navigate to={'../notes'}/>

    return (
        <div className={"page auth-page"}>
            <Form title={"Create account"} onSubmit={submitHandler}>
                <input type="text" name={"username"} placeholder={"Username"}/>
                <input type="email" name={"email"} placeholder={"Email"}/>
                <input type="password" name={"password"} placeholder={"Password"}/>
                <input type="password" name={"confirmPassword"} placeholder={"Confirm password"}/>
                <p>Already have an account? <Link className={'link'} to={'/note-app/login'}>Login now</Link></p>
            </Form>
            {isLoading ?? <Loading/>}
        </div>
    );
};

export default SignupPage;