import React from 'react';

interface DetailProps {
    DetailsCSS: string;
    ifIngredient1: any;
    ifIngredient2: any;
    ifIngredient3: any;
    ifIngredient4: any;
    ifIngredient5: any;
    Ingredient1: any;
    Ingredient2: any;
    Ingredient3: any;
    Ingredient4: any;
    Ingredient5: any;
    Measure1: any;
    Measure2: any;
    Measure3: any;
    Measure4: any;
    Measure5: any;
}

const Details: React.FC<DetailProps> = ({ DetailsCSS, ifIngredient1, ifIngredient2, ifIngredient3, ifIngredient4, ifIngredient5, Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Measure1, Measure2, Measure3, Measure4, Measure5 }) => {
return (
    <div>
        <ul className={DetailsCSS}>
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