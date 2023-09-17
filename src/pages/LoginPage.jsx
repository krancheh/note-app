import React from 'react';
import {useSelector} from "react-redux";
import {selectIsAuth} from "../store/userSlice";
import LoginForm from "../components/user/LoginForm";
import '../styles/user/AuthPage.css'
import '../styles/common/Page.css'
import {Navigate} from "react-router-dom";
import CheckEffect from "../components/common/CheckEffect";

const LoginPage = () => {
    const isAuth = useSelector(selectIsAuth);

    return (
        <div className={'page auth-page'}>
            <CheckEffect/>
            {isAuth ? <Navigate to={'/note-app/notes'}/> : <LoginForm/>}
        </div>
    );
};

export default LoginPage;