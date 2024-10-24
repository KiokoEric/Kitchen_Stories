import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popular from '../Popular/Popular';
import { useCookies } from "react-cookie";
import Button from '../../Components/Common/Button/Button';
import Output from '../../Components/Common/Output/Output';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchPage from '../../Components/Common/Search/SearchPage';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 

const Home: React.FC = () => {

    const UserID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [Recipes, setRecipes] = useState<[]>([])
    const [Search, setSearch] = useState<string>("")
    const [userOwner, setuserOwner] = useState<any>(UserID)
    const [SearchError, setSearchError] = useState<string>("")
    const [ShowPopular, setShowPopular] = useState<boolean>(true)

    // ONSEARCH FUNCTION

    const onSearch = async (e: React.FormEvent) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly enter a search item")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setSearchError("")
                setShowPopular(false)
                setRecipes(data.meals)
            })
            .catch(err => console.error(err));
        }
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
        <SearchPage
            idName= 'Home'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-white'
            Heading= 'Your desired dish ?'
            HeadingStyle= 'font-bold text-5xl mt-5 sm:mt-0'
            formStyle= 'bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-11/12 sm:w-3/5 lg:w-2/5'
            Placeholder= 'Search Recipe...'
            inputStyle= 'outline-none px-2 py-1 text-black w-11/12'
            Search= {Search}
            onChange= {e => setSearch(e.target.value)}
            onSubmit= {onSearch}
            onClick= {onSearch}
            ButtonStyle= 'bg-buttonOrange px-3 py-1 rounded'
            IconStyle= 'cursor-pointer'
            SearchError= {SearchError}
            Text= 'Search any recipe e.g burger, pizza, sandwich'
            ErrorStyle='font-bold text-red-700'
        />
        <section>
            { ShowPopular? <Popular /> : null }
        </section>
        <section className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'>
            {
            (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-5xl w-custom'>No Results Found</h2> :
            Recipes.map((Recipe: any ) => {
            return (
                <div className='flex flex-col items-center justify-center sm:items-start'>
                    <Link className=' text-black no-underline' to={`/${Recipe.idMeal}`}>
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
                        Children={
                            <FontAwesomeIcon icon={faBookmark} className='bg-orange-600 cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />
                        }
                    />
                </div>
            )
            })
            } 
        </section>
    </div>
)
}   

export default Home
