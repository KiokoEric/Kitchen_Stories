import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Button from '../../Components/Common/Button/Button';
import Output from '../../Components/Common/Output/Output';
import Heading from '../../Components/Common/Heading/Heading';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 

const Explore: React.FC = () => {

    const UserID = useGetUserID();
    const [Cookie, __] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [url, seturl] = useState<string>("")
    const [userOwner, _] = useState<any>(UserID)
    const [Recipes, setRecipes] = useState<[]>([]) 

    // EXPLORE FUNCTION

    const Alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]

    var num = 0;

    const setIndex = (Alphabets: string)=> {
        seturl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Alphabets}`);
        getMeals()
    }

    const getMeals = () => {
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            setRecipes(data.meals)
        })
        .catch(err => console.error(err));
    }

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
    <div>
        <Heading 
            idName='Explore'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 px-5 text-center text-white'
            Heading='Explore your creativity'
            HeadingStyle='font-bold text-4xl sm:text-5xl'
            FirstStyle='font-bold text-2xl sm:text-3xl'
            FirstText='If plan A does not work the alphabet has 25 more letters.'
            SecondStyle='font-bold text-2xl'
            SecondText='Double click on any of the letters below'
        />
        <section className='grid grid-cols-8 gap-2 items-center justify-center mb-10 px-5 sm:grid-cols-12 xl:flex '>
            {
            Alphabets.map((Alphabet) => {
                return (
                    <div key={num++} onClick={()=>setIndex(Alphabet)} className='flex gap-3'>
                        <h3 className='bg-darkOrange cursor-pointer font-bold text-black text-center text-lg px-3 py-1 rounded'>{Alphabet}</h3>
                    </div>
                    
                )
            })
            } 
        </section>
        <section className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'> 
            {
            (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Recipes.map((Recipe : any) => {
                return (
                <div className="flex flex-col items-center justify-center sm:items-start" key={Recipe.idMeal}>
                    <Link  className='text-black no-underline' to={`/${Recipe.idMeal}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Recipe.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Recipe.strMeal}
                        />
                    </Link>
                    <Button
                        ID="Bookmark"
                        onClick={() => AddToFavourites(Recipe.idMeal)}
                        Children={<FontAwesomeIcon icon={faBookmark} className='bg-orange-600 cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />}
                    />
                    </div>
                    )
                    }
                    )}
                </section> 
            </div>)
}
export default Explore