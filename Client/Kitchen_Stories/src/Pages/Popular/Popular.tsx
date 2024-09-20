import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from 'react';
import Button from '../../Components/Common/Button/Button';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 
import Ingredients from '../../Components/Common/Ingredients/Ingredients';

const Popular: React.FC = () => {

    const UserID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [Popular, setPopular] = useState<[]>([])
    const [userOwner, setuserOwner] = useState<any>(UserID)

    // CALLING ON POPULAR RECIPES FROM MEALDB API

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`) 
        .then(response => response.json())
        .then(data => {
            setPopular(data.meals)
        })
        .catch(err => console.error(err));
    },[])

    // ADD TO FAVOURITES

    const AddToFavourites = async (ID: any) => {
        try {
            const data = {
                ID, userOwner
            }
            await axios.post(`http://localhost:4000/Favourites/Favourite/${ID}`, data, {
                headers: { authorization: Cookie.auth_token },
            })
        } catch (error) {
            console.error(error);
        }
    }

return (
    <div id='Popular' className='mb-10' >
        <h3 className='font-bold mb-10 text-center text-4xl'>Popular Recipes</h3> 
    { 
    Popular.map((Item: any) => {
        return(
            <div key={Item.idMeal} >
                <figure className='flex flex-col gap-5 justify-center px-5 sm:flex-row'>
                    <Link to={`/${Item.idMeal}`}> 
                        <img src={Item.strMealThumb} alt="" className='cursor-pointer rounded' id='RecipeImage' />
                    </Link>
                    <figcaption className='flex flex-col items-center gap-1 sm:gap-5 sm:items-start'>
                        <h2 className='font-bold text-3xl text-center sm:text-left '>{Item.strMeal} <span>({Item.strArea})</span> </h2>
                        <h4 className='font-bold text-2xl'>Ingredients</h4>
                        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3'>
                            <Ingredients DetailsCSS='list-disc list-inside'
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
                            <Ingredients DetailsCSS='list-disc list-inside'
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
                            <Ingredients DetailsCSS='list-disc list-inside'
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
                        <Button
                            onClick={() => AddToFavourites(Item.idMeal)}
                            ButtonStyle='bg-darkOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black sm:w-1/2'
                            ButtonText='Add to Favourites'
                        />
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