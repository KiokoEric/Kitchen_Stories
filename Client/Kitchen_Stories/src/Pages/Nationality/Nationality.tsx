import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiWorld } from "react-icons/gi";
import { useCookies } from "react-cookie";
import { IoSearchSharp } from "react-icons/io5";
import Output from '../../Components/Common/Output/Output';
import Select from '../../Components/Common/Select/Select';
import Button from '../../Components/Common/Button/Button';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 

const Nationality: React.FC = () => {

    const UserID = useGetUserID()
    const [Cookie, setCookie] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [userOwner, _] = useState<any>(UserID)
    const [Search, setSearch] = useState<string>("")
    const [SearchError, setSearchError] = useState<string>("")
    const [Nationalities, setNationalities] = useState<[]>([])

    // ONSEARCH FUNCTION

    const onSearch = async (e: React.FormEvent) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly select a country")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Search}`)
        .then(response => response.json())
        .then((data) => {
            setSearchError("")
            setNationalities(data.meals)
            setSearch("")
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
        <section id='Nationality' className='flex flex-col items-center justify-center gap-5 mb-10 text-white' >
        <h1 className='font-bold text-5xl'>Where To?</h1>
            <form onSubmit={onSearch} className="bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-11/12 sm:w-3/5 lg:w-2/5" >
                <GiWorld size="1.8rem" color="black" />
                <Select SelectStyle='outline-none px-2 py-1 text-black w-11/12' Search={Search} onSearch={e => setSearch(e.target.value)}>
                    <option value="">Search among the countries below</option>
                    <option value="British">Britain</option>
                    <option value="Canadian">Canada</option>
                    <option value="Chinese">China</option>
                    <option value="Croatian">Croatia</option>
                    <option value="Dutch">Netherlands</option>
                    <option value="Egyptian">Egypt</option>
                    <option value="French">France</option>
                    <option value="Greek">Greece</option>
                    <option value="Indian">India</option>
                    <option value="Irish">Ireland</option>
                    <option value="Italian">Italy</option>
                    <option value="Jamaican">Jamaica</option>
                    <option value="Japanese">Japan</option>
                    <option value="Malaysian">Malaysia</option>
                    <option value="Mexican">Mexico</option>
                    <option value="Moroccan">Morocco</option>
                    <option value="Filipino">Philippines</option>
                    <option value="Polish">Poland</option>
                    <option value="Portugese">Portugal</option>
                    <option value="Russian">Russia</option>
                    <option value="Spanish">Spain</option>
                    <option value="Thai">Thailand</option>
                    <option value="Tunisian">Tunisia</option>
                    <option value="Turkish">Turkey</option>
                    <option value="American">United States of America</option>
                    <option value="Vietnamese">Vietnam</option>
                </Select>
                <button onClick={onSearch} className="bg-Orange px-3 py-1 rounded"><IoSearchSharp size="1.8rem" color="white" className="cursor-pointer" /></button>
            </form>
            <span className='text-red-700'>{SearchError}</span>
            <p>Search any nation e.g Britain, Canada, America, Kenya</p>
        </section>
        <section className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'>
            {
            (!Nationalities) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Nationalities.map((Nationality: any ) => {
            return (
                <div className="flex flex-col items-center justify-center sm:items-start">
                    <Link className='text-black no-underline' to={`/${Nationality.idMeal}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Nationality.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Nationality.strMeal}
                        />
                    </Link>
                    <Button
                        ID="Bookmark"
                        onClick={() => AddToFavourites(Nationality.idMeal)}
                        Children={<FontAwesomeIcon icon={faBookmark} className='bg-orange-600 cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />}
                    />
                </div>
                
            )
            })
            } 
        </section>
    </div>
)
}

export default Nationality