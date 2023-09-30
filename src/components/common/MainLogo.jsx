import React from 'react';
import {ReactComponent as Logo} from "../../assets/icons/main-logo.svg";
import {Link} from "react-router-dom";

const MainLogo = () => {
    return (
        <Link to="/note-app"><Logo/></Link>
    );
};

export default MainLogo;