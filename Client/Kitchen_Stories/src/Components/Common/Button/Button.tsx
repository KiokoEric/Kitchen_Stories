import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    ButtonText: string;
    ButtonStyle: string;
}

const Button: React.FC<ButtonProps> = ({ ButtonText, ButtonStyle, onClick }) => {
return (
    <div onClick={onClick} className={ButtonStyle}>{ ButtonText }</div>
)
}

export default React.memo(Button);