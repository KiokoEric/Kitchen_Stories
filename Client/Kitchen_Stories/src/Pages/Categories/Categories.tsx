import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { ImSpoonKnife } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import Button from "../../Components/Common/Button/Button";
import Select from '../../Components/Common/Select/Select';
import Output from '../../Components/Common/Output/Output';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 

const Categories: React.FC = () => {

    const UserID = useGetUserID()
    const [Cookie, __] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [userOwner, _] = useState<any>(UserID)
    const [Search, setSearch] = useState<string>("")
    const [Categories, setCategories] = useState<[]>([])
    const [SearchError, setSearchError] = useState<string>("")

    // ONSEARCH FUNCTION

    const onSearch = async (e: React.FormEvent) => {
        e.preventDefault()

        if(Search === ""){  
            setSearchError("Kindly enter a search category")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setSearch("")
                setSearchError("")
                setCategories(data.meals)
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
        <section id='Categories' className='flex flex-col items-center justify-center gap-5 mb-10 text-white'>
            <h1 className='font-bold text-5xl'>Select a category</h1>
            <form onSubmit={onSearch} className="bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-11/12 sm:w-3/5 lg:w-2/5">
                <ImSpoonKnife size="1.8rem" color="black" />
                <Select SelectStyle='outline-none px-2 py-1 text-black w-11/12' Search={Search} onSearch={e => setSearch(e.target.value)}>
                    <option value="">Search among the categories below</option>
                    <option value="Beef">Beef</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Goat">Goat</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Pork">Pork</option>
                    <option value="Seafood">SeaFood</option>
                    <option value="Side">Side</option>
                    <option value="Starter">Starter</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                </Select>
                <button onClick={onSearch} className="bg-Orange px-3 py-1 rounded"><IoSearchSharp size="1.8rem" color="white" className="cursor-pointer" /></button>
            </form> 
            <span className='text-red-700'>{SearchError}</span>
        </section>
        <section className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'>
            {
            (!Categories) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Categories.map((Category: any ) => {
            return (
                <div className="flex flex-col items-center justify-center sm:items-start"><Link className=' text-black no-underline' to={`/${Category.idMeal}`} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Category.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Category.strMeal}
                    />
                    </Link>
                    <Button
                        ID="Bookmark"
                        onClick={() => AddToFavourites(Category.idMeal)}
                        Children={<FontAwesomeIcon icon={faBookmark} className='bg-orange-600 cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />}
                    />
                </div>
        )})
        } 
        </section>
    </div>
)
}

export default Categories