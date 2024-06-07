import '../Home/Home.css';
import { Link } from 'react-router-dom';
import React, { ChangeEvent, useState } from 'react';
import Output from '../../Components/Common/Output/Output';
import SearchPage from '../../Components/Common/Search/SearchPage';

const Home: React.FC = () => {

    const [Recipes, setRecipes] = useState([])
    const [Search, setSearch] = useState("")
    const [SearchError, setSearchError] = useState("")
    const [Results, setResults] = useState("")

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const getRecipe = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly enter a search item")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setRecipes(data.meals)
                setResults("Results for your search will be displayed below the popular recipes section.")
            })
            .catch(err => console.error(err));
        }
    }

    const onSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly enter a search item")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
            .then(response => response.json())
            .then((data) => {
                setRecipes(data.meals)
                setResults("Results for your search will be displayed below the popular recipes section.")
            })
            .catch(err => console.error(err));
        }
    }

return (
    <div>
        <SearchPage
            idName= 'Home'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-white'
            Heading= 'Your desired dish ?'
            HeadingStyle= 'font-bold text-4xl'
            formStyle= 'bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-2/5'
            Placeholder= 'Search Recipe...'
            inputStyle= 'outline-none px-2 py-1 text-black w-11/12'
            Search= {Search}
            onChange= {handleSearch}
            onSubmit= {getRecipe}
            onClick= {onSearch}
            ButtonStyle= 'bg-yellow-600 px-3 py-1 rounded'
            IconStyle= 'cursor-pointer'
            SearchError= {SearchError}
            Text= 'Search any recipe e.g burger, pizza, sandwich'
            ErrorStyle='text-red-700'
            Results={Results}
        />
        <section className='grid grid-cols-3 gap-5 px-10 '>
            {
            (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Recipes.map((Recipe: any ) => {
            return (
                <div>
                    <Link className=' text-black no-underline' to={`/${Recipe.idMeal}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Recipe.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Recipe.strMeal}
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

export default Home