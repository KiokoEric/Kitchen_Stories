import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Details from '../../Components/Common/Ingredients/Ingredients';

interface IntrinsicElements {
    'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        color?: string;
        size?: string;
    };
}

const Instructions: React.FC<IntrinsicElements> = () => {

    const { MealId } = useParams()

    // USESTATE HOOK

    const [Items, setItems] = useState<[]>([])
    const [VideoLink, setVideoLink] = useState<string>('')

    // CALLING ON THE RECIPE DETAILS FROM MEALDB
    
    useEffect(()=> {  
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)  
        .then(response => response.json())
        .then((data) => {
            const videoUrl = data.meals[0].strYoutube
            setItems(data.meals)
            setVideoLink(videoUrl)
        })
        .catch(err => console.error(err));
    })

    const PlayVideo = () => {
        window.open(VideoLink)
    }

return (
    <div className='mb-5 mt-5 px-5'>
        <article>
            <ion-icon onClick={PlayVideo} id="Play" name="play-sharp"></ion-icon>
        </article>
        {
        (!Items) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
        Items.map((Item: any)=> {
            return (
            <div key={Item.idMeal}>
                <figure className='flex flex-col gap-5 justify-center sm:flex-row'>
                    <div className='sm:w-4/12' >
                        <img src={Item.strMealThumb} alt="" id='RecipeImage' className='cursor-pointer rounded ' />
                    </div>
                    <figcaption className='flex flex-col gap-5 sm:w-8/12'>
                        <h2 className='capitalize font-bold text-3xl text-center sm:text-left'>{Item.strMeal}</h2>
                        <h3 className='font-bold text-2xl text-center sm:text-left'>Ingredients</h3>
                        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3'>
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
                        <h3 className='font-bold text-2xl text-center sm:text-left'>Instructions</h3>
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