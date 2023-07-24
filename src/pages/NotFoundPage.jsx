import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1 style={{marginTop: '30vh'}}>Error 404: page not found :(</h1>
                <Link to={"/"}>Go to main</Link>
            </div>
        </>
    );
};

export default NotFoundPage;