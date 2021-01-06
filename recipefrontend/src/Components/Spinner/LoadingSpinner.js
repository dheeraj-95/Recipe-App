import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <React.Fragment>
            <Loader 
                type="Puff"
                height="35"
                color="#FFF"
                width="60"
            
            />
        </React.Fragment>
    )
};

export default LoadingSpinner;