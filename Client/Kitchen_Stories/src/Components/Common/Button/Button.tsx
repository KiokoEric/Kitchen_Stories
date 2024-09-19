import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    ID?: string;
    Children?: any;
    ButtonText?: string;
    ButtonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ ID, Children, ButtonText, ButtonStyle, onClick }) => {
return (
    <button id={ID} onClick={onClick} className={ButtonStyle}> {Children} { ButtonText }</button>
)
}

export default React.memo(Button);