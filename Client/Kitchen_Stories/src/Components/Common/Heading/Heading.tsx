import React from 'react';

interface HeadingProps {
    idName: string;
    ContainerStyle: string;
    Heading: string;
    HeadingStyle: string;
}

const Heading: React.FC<HeadingProps> = ({ idName, ContainerStyle, Heading, HeadingStyle, }) => {

return (
    <div id={idName} className={ContainerStyle} >
        <h2 className={HeadingStyle}>{Heading}</h2>
    </div>
)
}

export default Heading