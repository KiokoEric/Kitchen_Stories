import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../Components/Common/Details/Details';

const Instructions: React.FC = () => {


    const [Items, setItems] = useState([])
    const { MealId } = useParams()
    
    useEffect(()=> {  
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)  
        .then(response => response.json())
        .then((data) => {
            setItems(data.meals)
        })
        .catch(err => console.error(err));
    })

return (
    <div className='mb-5 mt-5'>
        {
        (!Items) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
        Items.map((Item: any)=> {
            return (
            <div key={Item.idMeal}>
                <figure className='flex gap-10 justify-center' >
                    <div>
                        <img src={Item.strMealThumb} alt="" id='RecipeImage' className='cursor-pointer rounded' />
                    </div>
                <figcaption className='flex flex-col gap-5'>
                    <h2 className='font-bold text-3xl'>{Item.strMeal}</h2>
                    <h3 className='font-bold text-2xl'>Ingredients</h3>
                    <div className='flex flex-row gap-14'>
                        <Details DetailsCSS='list-disc list-inside'
                            ifIngredient1 = {Item.strIngredient1}
                            ifIngredient2 = {Item.strIngredient2}
                            ifIngredient3 = {Item.strIngredient3}
                            ifIngredient4 = {Item.strIngredient4}
                            ifIngredient5 = {Item.strIngredient5}
                            Ingredient1 = {Item.strIngredient1}
                            Ingredient2 = {Item.strIngredient2}
                            Ingredient3 = {Item.strIngredient3}
                            Ingredient4 = {Item.strIngredient4}
                            Ingredient5 = {Item.strIngredient5}
                            Measure1 = {Item.strMeasure1}
                            Measure2 = {Item.strMeasure2}
                            Measure3 = {Item.strMeasure3}
                            Measure4 = {Item.strMeasure4}
                            Measure5 = {Item.strMeasure5}
                        />
                        <Details DetailsCSS='list-disc list-inside'
                            ifIngredient1 = {Item.strIngredient6}
                            ifIngredient2 = {Item.strIngredient7}
                            ifIngredient3 = {Item.strIngredient8}
                            ifIngredient4 = {Item.strIngredient9}
                            ifIngredient5 = {Item.strIngredient10}
                            Ingredient1 = {Item.strIngredient6}
                            Ingredient2 = {Item.strIngredient7}
                            Ingredient3 = {Item.strIngredient8}
                            Ingredient4 = {Item.strIngredient9}
                            Ingredient5 = {Item.strIngredient10}
                            Measure1 = {Item.strMeasure6}
                            Measure2 = {Item.strMeasure7}
                            Measure3 = {Item.strMeasure8}
                            Measure4 = {Item.strMeasure9}
                            Measure5 = {Item.strMeasure10}
                        />
                        <Details DetailsCSS='list-disc list-inside'
                            ifIngredient1 = {Item.strIngredient11}
                            ifIngredient2 = {Item.strIngredient12}
                            ifIngredient3 = {Item.strIngredient13}
                            ifIngredient4 = {Item.strIngredient14}
                            ifIngredient5 = {Item.strIngredient15}
                            Ingredient1 = {Item.strIngredient11}
                            Ingredient2 = {Item.strIngredient12}
                            Ingredient3 = {Item.strIngredient13}
                            Ingredient4 = {Item.strIngredient14}
                            Ingredient5 = {Item.strIngredient15}
                            Measure1 = {Item.strMeasure11}
                            Measure2 = {Item.strMeasure12}
                            Measure3 = {Item.strMeasure13}
                            Measure4 = {Item.strMeasure14}
                            Measure5 = {Item.strMeasure15}
                        />
                    </div>
                    <h3 className='font-bold text-2xl' >Instructions</h3>
                    <pre id='Instructions' >
                        {Item.strInstructions}
                    </pre>
                </figcaption>
                </figure>
            </div>
            )
        })}
    </div>
)
}

export default Instructions