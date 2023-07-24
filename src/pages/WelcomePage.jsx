import React from 'react';
import {Link} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div style={{textAlign: 'center', marginTop: '40vh'}}>
            <h1>Welcome to NotePlus!</h1>
            <Link to={"/notes"}>Go to Notes</Link>
        </div>
    );
};

export default WelcomePage;