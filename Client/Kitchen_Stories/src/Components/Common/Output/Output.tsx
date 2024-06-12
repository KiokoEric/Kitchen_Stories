import React from 'react';

interface ResultProps {
    figureStyle: string;
    image: string;
    imageStyle: string;
    TitleStyle: string;
    Title: string;
}

const Output: React.FC<ResultProps> = ({ figureStyle, image, imageStyle, TitleStyle, Title }) => {
return (
    <figure className={figureStyle} >
        <img src={image} alt="" width="500px" className={imageStyle} /> 
        <figcaption>
            <h2 className={TitleStyle}>{Title}</h2>
        </figcaption>
    </figure>
)
}

export default React.memo(Output)
