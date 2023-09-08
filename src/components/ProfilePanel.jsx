import React, {useState} from 'react';
import profileIcon from '../assets/images/profile-icon.jpg';
import '../styles/ProfilePanel.css'

const ProfilePanel = () => {
    const [accountName, setAccountName] = useState('Ilya Pedik');

    setAccountName('Ilya Peddorrrr');
    return (
        <div className={'profile-panel'}>
            <p>{accountName}</p>
            <img className={'profile-image'} src={profileIcon} alt="penis"/>
        </div>
    );
};

export default ProfilePanel;