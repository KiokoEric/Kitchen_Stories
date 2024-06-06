import React, { ChangeEvent, useState } from 'react';
import '../Home/Home.css';
import SearchPage from '../../Components/Common/Search/SearchPage';


const Home: React.FC = () => {

    const [Recipes, setRecipes] = useState([])
    const [Search, setSearch] = useState("")
    const [SearchError, setSearchError] = useState("")

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
            })
            .catch(err => console.error(err));
        }
    }

return (
    <div>
        <SearchPage
            idName= 'Home'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-5 text-white'
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
        />
    </div>
)
}   

export default Home