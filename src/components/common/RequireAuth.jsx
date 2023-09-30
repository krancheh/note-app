import React, {useEffect} from 'react';
import {useCheckAuthMutation} from "../../features/user/userAPI";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../features/user/userSlice";
import Loading from "./Loading";

const RequireAuth = () => {
    const dispatch = useDispatch();
    const [checkAuth, {isLoading, isSuccess, isError}] = useCheckAuthMutation();
    const location = useLocation();
    useEffect(() => {
        const checkAuthEffect = async () => {
            try {
                const {token} = await checkAuth().unwrap();
                await localStorage.setItem('token', token);
                dispatch(setCredentials({token}));
            } catch (e) {
                console.log(e);
            }
        }
        checkAuthEffect();
    }, []);


    if (isError) {
        localStorage.clear();
        return <Navigate to='login' state={{from: location}} replace/>
    }

    return (
        isLoading
            ? <Loading/>
            : isSuccess
                ? <Outlet/>
                : isError
                    ? <div>Error</div>
                    : null
    );
};

export default RequireAuth;