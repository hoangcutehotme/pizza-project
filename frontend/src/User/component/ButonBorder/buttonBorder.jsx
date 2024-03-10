import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './style.css'

const ButtonBorder = ({ onClick, content }) => {
    return (
        <div className="button-border" onClick={onClick}>
            {content}
        </div>

    );
};

export default ButtonBorder;