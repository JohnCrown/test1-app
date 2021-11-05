import React  from "react";
import icon from './error.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
        <img src={icon} alt="error icon"/>
        <span >BOOM! ERROR!</span>
       
      </div>
    );
};


export default ErrorIndicator;