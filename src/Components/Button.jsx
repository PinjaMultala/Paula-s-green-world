import React from 'react';

import './Styles/Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <span className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
            <i className="fas fa-shopping-basket"></i>
        </span>
    )

}