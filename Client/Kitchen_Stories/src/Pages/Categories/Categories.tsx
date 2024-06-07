import '../Categories/Categories.css';
import React, { ChangeEvent, useState } from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Output from '../../Components/Common/Output/Output';


const Categories: React.FC = () => {

    const [Search, setSearch] = useState("")
    const [SearchError, setSearchError] = useState("")
    const [Categories, setCategories] = useState([])

    const handleSearch = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearch(e.target.value)
    }

    const getCategory =(e: React.FormEvent<HTMLFormElement>)=> { 
        e.preventDefault()

        if(Search === ""){  
            setSearchError("Kindly enter a search category")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setSearchError("")
                setCategories(data.meals)
                setSearch("")
            })
            .catch(err => console.error(err)); 
        }
    }

    const onSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(Search === ""){  
            setSearchError("Kindly enter a search category")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setSearchError("")
                setCategories(data.meals)
                setSearch("")
            })
            .catch(err => console.error(err)); 
        }
    }

return (
    <div>
        <section id='Categories' className='flex flex-col items-center justify-center gap-5 mb-10 text-white'>
            <h1 className='font-bold text-4xl'>Enter a category</h1>
            <form onSubmit={getCategory} className="bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-2/5">
                <GiKnifeFork size="1.8rem" color="black" />
                <select name="" id="Select" className='outline-none px-2 py-1 text-black w-11/12' value={Search} onChange={handleSearch} >
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
                </select>
                <button onClick={onSearch} className="bg-yellow-600 px-3 py-1 rounded"><IoSearchSharp size="1.8rem" color="white" className="cursor-pointer" /></button>
            </form> 
            <span className='text-red-700'>{SearchError}</span>
        </section>
        <section className='grid grid-cols-3 gap-5 px-10 '>
            {
            (!Categories) ? <h2 className='text-red-700 text-3xl'>No Results Found</h2> :
            Categories.map((Category: any ) => {
            return (
                <div>
                    <Link className=' text-black no-underline' to={`/${Category.idMeal}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Category.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Category.strMeal}
                        />
                    </Link>
                </div>
            )
            })
            } 
        </section>
    </div>
)
}

export default Categories