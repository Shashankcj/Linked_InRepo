import React, { useState } from 'react';
import './DropDown.css';

const DropDown = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (

        <div className="dropdown">
            <a href="#" className="dropdown-toggle" onClick={toggleDropdown}>
                Languages <span className="arrow">&#9660;</span>
            </a>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#">Kannada</a>
                    <a href="#">English</a>
                    <a href="#">Tulu</a>
                    <a href="#">Tamil</a>
                    <a href="#">Telugu</a>
                    <a href="#">Malyalam</a>
                    <a href="#">Marati</a>
                </div>
            )}
        </div>
    );
};


export default DropDown