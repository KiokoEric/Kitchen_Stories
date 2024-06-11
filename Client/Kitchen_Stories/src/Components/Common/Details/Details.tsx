import React from 'react';

interface DetailProps {
    ifIngredient1: string;
    ifIngredient2: string;
    ifIngredient3: string;
    ifIngredient4: string;
    ifIngredient5: string;
    Ingredient1: string;
    Ingredient2: string;
    Ingredient3: string;
    Ingredient4: string;
    Ingredient5: string;
    Measure1: string;
    Measure2: string;
    Measure3: string;
    Measure4: string;
    Measure5: string;
}

const Details: React.FC<DetailProps> = ({ ifIngredient1, ifIngredient2, ifIngredient3, ifIngredient4, ifIngredient5, Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Measure1, Measure2, Measure3, Measure4, Measure5 }) => {
return (
    <div>
        <ul className='list-disc' >
            {ifIngredient1 ? (<li>{Ingredient1} : {Measure1}</li>) : null}
            {ifIngredient2 ? (<li>{Ingredient2} : {Measure2}</li>) : null}
            {ifIngredient3 ? (<li>{Ingredient3} : {Measure3}</li>) : null}
            {ifIngredient4 ? (<li>{Ingredient4} : {Measure4}</li>) : null}
            {ifIngredient5 ? (<li>{Ingredient5} : {Measure5}</li>) : null}
        </ul>
    </div>
)
}

export default Details