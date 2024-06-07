import React from 'react';
import '../Explore/Explore.css';
import Heading from '../../Components/Common/Heading/Heading';

const Explore: React.FC = () => {
return (
    <div>
        <Heading 
            idName='Explore'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Explore your creativity'
            HeadingStyle='font-bold text-4xl'
            FirstStyle='font-bold text-3xl'
            FirstText='If plan A does not work the alphabet has 25 more letters.'
            SecondStyle='font-bold text-2xl'
            SecondText='Double click on any of the letters below'
        />
    </div>
)
}

export default Explore