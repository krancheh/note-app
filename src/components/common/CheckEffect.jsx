import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {check} from "../../store/userSlice";
import {useNavigate} from "react-router-dom";

const CheckEffect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkHandler = () => {
        dispatch(check()).then(res => {
            return res.meta.requestStatus === "rejected" ? navigate('/note-app/login') : null;
        })
    }
    useEffect(checkHandler, [dispatch, navigate])
    return null;
};

export default CheckEffect;