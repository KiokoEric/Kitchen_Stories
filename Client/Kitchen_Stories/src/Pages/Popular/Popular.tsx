import '../Popular/Popular.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Popular: React.FC = () => {

    const [Popular, setPopular] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`) 
        .then(response => response.json())
        .then(data => {
            setPopular(data.meals)
        } )
        .catch(err => console.error(err));
    },[])

return (
    <div id='Popular' className='mb-10' >
        <h3 className='font-bold mb-10 text-center text-4xl'>Popular Recipes</h3> 
    { 
    Popular.map((Item: any) => {
        return(
            <div key={Item.idMeal} >
                <figure className='flex gap-8 justify-center' >
                    <Link className='Link' to={`/${Item.idMeal}`}> 
                        <img src={Item.strMealThumb} alt="" className='cursor-pointer rounded' />
                    </Link>
                    <figcaption className='flex flex-col gap-5' >
                        <h2 className='font-bold text-3xl'>{Item.strMeal} <span>({Item.strArea})</span> </h2>
                        <h4 className='font-bold text-2xl'>Ingredients</h4>
                        <div className='flex flex-row gap-14' >
                            <ul className='list-disc' >
                                {Item.strIngredient1 ? (<li>{Item.strIngredient1} : {Item.strMeasure1}</li>) : null}
                                {Item.strIngredient2 ? (<li>{Item.strIngredient2} : {Item.strMeasure2}</li>) : null}
                                {Item.strIngredient3 ? (<li>{Item.strIngredient3} : {Item.strMeasure3}</li>) : null}
                                {Item.strIngredient4 ? (<li>{Item.strIngredient4} : {Item.strMeasure4}</li>) : null}
                                {Item.strIngredient5 ? (<li>{Item.strIngredient5} : {Item.strMeasure5}</li>) : null}
                                
                            </ul>
                            <ul className='list-disc' >
                                {Item.strIngredient6 ? (<li>{Item.strIngredient6} : {Item.strMeasure6}</li>) : null}
                                {Item.strIngredient7 ? (<li>{Item.strIngredient7} : {Item.strMeasure7}</li>) : null}
                                {Item.strIngredient8 ? (<li>{Item.strIngredient8} : {Item.strMeasure8}</li>) : null}
                                {Item.strIngredient9 ? (<li>{Item.strIngredient9} : {Item.strMeasure9}</li>) : null}
                                {Item.strIngredient10 ? (<li>{Item.strIngredient10} : {Item.strMeasure10}</li>) : null}
                            </ul>
                            <ul className='list-disc' >
                                {Item.strIngredient11 ? (<li>{Item.strIngredient11} : {Item.strMeasure11}</li>) : null}
                                {Item.strIngredient12 ? (<li>{Item.strIngredient12} : {Item.strMeasure12}</li>) : null}
                                {Item.strIngredient13 ? (<li>{Item.strIngredient13} : {Item.strMeasure13}</li>) : null}
                                {Item.strIngredient14 ? (<li>{Item.strIngredient14} : {Item.strMeasure14}</li>) : null}
                                {Item.strIngredient15 ? (<li>{Item.strIngredient15} : {Item.strMeasure15}</li>) : null}
                                {Item.strIngredient16 ? (<li>{Item.strIngredient16} : {Item.strMeasure16}</li>) : null}
                            </ul>
                        </div>
                    </figcaption>
                </figure>
            </div>
            )
        })
        }
    </div>
)
}

export default Popular