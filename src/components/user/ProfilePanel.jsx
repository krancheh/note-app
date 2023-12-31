import React from 'react';
import profileIcon from '../../assets/images/profile-icon.jpg';
import '../../styles/user/ProfilePanel.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/user/userSlice";

const ProfilePanel = () => {
    const {username} = useSelector(selectUser);
    // const image = fetch('http://10.206.38.36:7000/87e5734a-6d93-423e-a598-360c30ed3e9a.jpg')
    const logout = () => {
        localStorage.clear();
    }

    return (
        <div className={'profile'}>
            <div className={'profile__panel'}>
                <p className={'profile__name'}>{username}</p>
                <img className={'profile__avatar'}
                     src={profileIcon} alt="Avatar"/>
            </div>

            <div className="profile__dropdown">
                <Link className={'profile__dropdown__link'} to={'/'}>Profile</Link>
                <Link className={'profile__dropdown__link'} to={'/'}>Settings</Link>
                <Link className={'profile__dropdown__link'} to={'/'}>Theme</Link>
                <Link className={'profile__dropdown__link'} to={'/'}>Help</Link>
                <Link className={'profile__dropdown__link'} to={'/note-app/login'} onClick={logout}>Logout</Link>
            </div>
        </div>
    );
};

export default ProfilePanel;