import React from 'react';

interface ResultProps {
    image: string;
    Title: string;
    imageStyle: string;
    TitleStyle: string;
    figureStyle: string;
}

const Output: React.FC<ResultProps> = ({ figureStyle, image, imageStyle, TitleStyle, Title }) => {
return (
    <figure className={figureStyle} >
        <img src={image} alt="" className={imageStyle} /> 
        <figcaption>
            <h2 className={TitleStyle}>{Title}</h2>
        </figcaption>
    </figure>
)
}

export default React.memo(Output)