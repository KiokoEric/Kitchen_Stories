import React from 'react';

interface ButtonProps {
    ButtonText: string;
    ButtonStyle: string;
}

const Button: React.FC<ButtonProps> = ({ ButtonText, ButtonStyle }) => {
return (
    <div className={ButtonStyle}>{ ButtonText }</div>
)
}

export default Button