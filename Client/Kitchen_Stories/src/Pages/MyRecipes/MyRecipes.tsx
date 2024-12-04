import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import loadingGif from "../../assets/Cooking.gif";
import React, { useEffect, useState } from 'react';
import Output from "../../Components/Common/Output/Output";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Heading from "../../Components/Common/Heading/Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const MyRecipes: React.FC = () => {

    const userID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [Recipes, setRecipes] = useState<[]>([]) 
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // CALLING ON THE USER'S CREATED RECIPES

    useEffect(() => {

        const fetchRecipes = async () => {
            await axios.get(`http://localhost:4000/Recipe/${userID}/Recipes`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((Response) => {
                setRecipes(Response.data)
            })
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }

        fetchRecipes() 

    }, [userID])

    // DELETE RECIPE

    const handleDelete= (_id: any) => {
        axios.delete(`http://localhost:4000/Recipe/${_id}`, {
            headers: { authorization: Cookie.auth_token }
        }) 
        .then(() => {
            window.location.reload()
        }
        )
    }

return (
    <div className="mb-10" >
        <Heading
            idName='MyRecipes'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-8 text-center text-white'
            Heading='My Recipes'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-8 m-auto w-11/12 sm:grid-cols-3'>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center m-auto w-custom">
                    <img src={loadingGif} alt="Loading Gif..." id="Loading" />
                </div>
            ) : (
            (Recipes.length > 0) ?  
            Recipes.map((Recipe : any) => { 
            return (
            <div className="flex flex-col items-center justify-center" >
                <Link key={Recipe.index}  to={`/Information/${Recipe._id}`} className='flex flex-col gap-3 text-black no-underline'> 
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Recipe.Image}
                        imageStyle='rounded'
                        TitleStyle='capitalize font-bold text-black text-center text-3xl'
                        Title={Recipe.Name}
                    />
                </Link>
                <div className="flex gap-3 items-center justify-center">
                    <Link id="Edit" to={`/Edit/${Recipe._id}`} key={Recipe._id}>
                        <FontAwesomeIcon icon={faPenToSquare} className="bg-orange-600 cursor-pointer font-bold p-3 rounded-full text-xl" />
                    </Link>
                    <div id="Delete">
                        <FontAwesomeIcon icon={faTrash} className="bg-orange-600 cursor-pointer font-bold p-3 rounded-full text-xl" onClick={() => handleDelete(Recipe._id)} /> 
                    </div>
                    
                </div>
            </div>
            )
            })
            : <h2 className='font-bold m-auto text-red-700 text-center text-5xl w-custom'>No Results Found</h2>
            )}
        </section>
    </div> 
)
}   

export default MyRecipes