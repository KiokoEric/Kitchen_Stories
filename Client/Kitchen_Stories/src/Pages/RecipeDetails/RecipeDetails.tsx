import Axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useCookies } from "react-cookie";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const RecipeDetails:React.FC = () => {

    const [Cookie,_] = useCookies(["auth_token"]); 
    const [Recipes, setRecipes] = useState<string[]>([])
    const { id } = useParams()

    useEffect(() => {
        Axios.get(`https://cook-io-server.onrender.com/Recipe/${id}`, {
        headers: { authorization: Cookie.auth_token }
        }) 
        .then((Response) => {
            setRecipes(Response.data)
        })
    },[])

return (
    <>
        {
        (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
        Recipes.map((Recipe: any)=> {
            return (
                <div key={Recipe._id}>
                    <figure className='flex gap-10 justify-center'>
                        <img src={Recipe.Image} alt="" id='RecipeImage' className='cursor-pointer rounded' />
                        <div>
                            <Link to={`/Edit/${Recipe._id}`} key={Recipe._id} >
                                <FaEdit size="1.8rem" className="bg-Orange text-black rounded-full px-2 py-2" />
                            </Link>
                            <MdDelete size="1.8rem" className="bg-Orange text-black rounded-full px-2 py-2" />
                        </div>
                        <figcaption className='flex flex-col gap-5'>
                            <h2 className='font-bold text-3xl'>{Recipe.Name}</h2>
                            <p>{Recipe.Description}</p> 
                            <h3 className='font-bold text-2xl'>Ingredients</h3>
                            <pre id="Instructions" >{Recipe.Ingredients}</pre>
                            <h3 className='font-bold text-2xl'>Instructions</h3>
                            <pre id="Instructions" >{Recipe.Instructions}</pre>
                        </figcaption>
                    </figure>
                </div>
            )}
        )
        }
    </>
)
}

export default RecipeDetails