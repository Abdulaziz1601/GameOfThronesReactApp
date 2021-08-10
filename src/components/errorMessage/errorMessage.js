import React from 'react'
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return (
        <React.Fragment>
        {/* <img src={process.env.PUBLIC_URL + '/img/error.png'} alt="error"></img> Getting image from public folder */}
        <img src={img} alt="error"></img>
        <span>Something went wrong... </span>
        </React.Fragment>
    )
}

export default ErrorMessage;
