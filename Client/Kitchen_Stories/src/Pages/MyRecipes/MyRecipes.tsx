import Axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import loadingGif from "../../assets/Cooking.gif";
import Heading from "../../Components/Common/Heading/Heading";
import Output from "../../Components/Common/Output/Output";

const MyRecipes: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [Recipes, setRecipes] = useState([]) 

    useEffect(() => {

        const fetchRecipes = async () => {
            await Axios.get(``, {
            }) 
            .then((Response) => {
                setRecipes(Response.data)
            })
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }

        fetchRecipes
    })

return (
    <div>
        <Heading
            idName='MyRecipes'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-8 text-center text-white'
            Heading='My Recipes'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-auto items-center justify-center gap-5 px-10'>
        {isLoading ? (
            <div className='flex flex-col items-center justify-center'>
                <img src={loadingGif} alt="Loading Gif..." className="w-max" />
            </div>
            ) : (
            (Recipes.length > 0) ?  
            Recipes.map((Recipe : any) => { 
            return (
            <div key={Recipe.index} >
                <Link to={`/Information/${Recipe._id}`} className='flex flex-col gap-3 text-black no-underline'> 
                <Output
                    figureStyle='flex flex-col gap-5 mb-5'
                    image={Recipe.Image}
                    imageStyle='rounded w-11/12'
                    TitleStyle='capitalize font-bold text-black text-center text-3xl'
                    Title={Recipe.Name}
                />
                    <div className="flex gap-3 justify-end">
                        <MdEditSquare size="1rem" className="bg-Orange" color="black" />
                        <MdDelete size="1rem" className="bg-Orange" color="black" />
                    </div>
                </Link>
            </div>
            )
            }) : <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2>
            )
            }
        </section>
    </div> 
)
}   

export default MyRecipes