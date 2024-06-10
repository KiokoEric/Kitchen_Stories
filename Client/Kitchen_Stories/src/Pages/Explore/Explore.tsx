import '../Explore/Explore.css';
import React, { useState } from 'react';
import Heading from '../../Components/Common/Heading/Heading';
import Output from '../../Components/Common/Output/Output';
import { Link } from 'react-router-dom';

const Explore: React.FC = () => {

    const [url, seturl] = useState("")
    const [Recipes, setRecipes] = useState([]) 

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

return (
    <div>
        <Heading 
            idName='Explore'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Explore your creativity'
            HeadingStyle='font-bold text-4xl'
            FirstStyle='font-bold text-3xl'
            FirstText='If plan A does not work the alphabet has 25 more letters.'
            SecondStyle='font-bold text-2xl'
            SecondText='Double click on any of the letters below'
        />
        <section className='flex gap-3 items-center justify-center mb-10' >
            {
            Alphabets.map((Alphabet) => {
                return (
                    <div key={num++} onClick={()=>setIndex(Alphabet)} className='flex gap-3'  >
                        <h3 className='bg-yellow-700 cursor-pointer text-black px-2 py-1 rounded' >{Alphabet}</h3>
                    </div>
                    
                )
            })
            } 
        </section>
        <section className='grid grid-cols-3 gap-5 px-10'> 
            {
            (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Recipes.map((Recipe : any) => {
                return (
                <div key={Recipe.idMeal}  >
                    <Link className='Link' to={`/${Recipe.idMeal}`} >
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
            }
            )
            }
        </section> 
    </div>
)
}

export default Explore

