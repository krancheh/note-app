import React from 'react';

const ErrorPage = ({error}) => {
    return (
        <div>{error || 'Something went wrong'}</div>
    );
};

export default ErrorPage;