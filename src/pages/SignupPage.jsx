import React from 'react';
import SignupForm from "../components/user/SignupForm";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../store/userSlice";

const SignupPage = () => {
    const isAuth = useSelector(selectIsAuth);

    return (
        <div className={"page auth-page"}>
            {isAuth ? <Navigate to={'/note-app/notes'}/> : <SignupForm/>}
        </div>
    );
};

export default SignupPage;