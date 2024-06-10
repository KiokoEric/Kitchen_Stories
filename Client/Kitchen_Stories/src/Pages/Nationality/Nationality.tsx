import '../Nationality/Nationality.css';
import React, { ChangeEvent, useState } from 'react';
import { GiWorld } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Output from '../../Components/Common/Output/Output';

const Nationality: React.FC = () => {

    const [Search, setSearch] = useState("")
    const [SearchError, setSearchError] = useState("")
    const [Nationalities, setNationalities] = useState()

    const handleSearch = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearch(e.target.value)
    }

    const getNationality =(e: React.FormEvent<HTMLFormElement>)=> { 
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

    const onSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
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

return (
    <div>
        <section id='Nationality' className='flex flex-col items-center justify-center gap-5 mb-10 text-white' >
        <h1 className='font-bold text-4xl'>Where To?</h1>
            <form onSubmit={getNationality} className="bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-2/5" >
                <GiWorld size="1.8rem" color="black" />
                <select name="" id="Select" className='outline-none px-2 py-1 text-black w-11/12' value={Search} onChange={handleSearch}>
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
                </select>
                <button onClick={onSearch} className="bg-Orange px-3 py-1 rounded"><IoSearchSharp size="1.8rem" color="white" className="cursor-pointer" /></button>
            </form>
            <span className='text-red-700'>{SearchError}</span>
            <p>Search any nation e.g Britain, Canada, America, Kenya</p>
        </section>
        <section className='grid grid-cols-3 gap-5 px-10'>
            {
            (!Nationalities) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Nationalities.map((Nationality: any ) => {
            return (
                <Link className='text-black no-underline' to={`/${Nationality.idMeal}`} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Nationality.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Nationality.strMeal}
                    />
                </Link>
            )
            })
            } 
        </section>
    </div>
)
}

export default Nationality

