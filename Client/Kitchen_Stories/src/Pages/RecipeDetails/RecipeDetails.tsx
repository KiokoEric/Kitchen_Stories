import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const RecipeDetails:React.FC = () => {

    const { id } = useParams()
    const [Cookie,_] = useCookies(["auth_token"]); 

    // USESTATE HOOK

    const [Recipes, setRecipes] = useState<any>([])

    // CALLING ON THE DETAILS OF THE USER'S CREATED RECIPES

    useEffect(() => {
        axios.get(`http://localhost:4000/Recipe/${id}`, {
        headers: { authorization: Cookie.auth_token }
        }) 
        .then((Response) => {
            setRecipes(Response.data)
        })
    },[])

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
    <>
    {
    (!Recipes) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
        <div key={Recipes._id}>
            <figure className='flex flex-col gap-10 items-center justify-center p-5 sm:flex-row sm:items-start'>
                <div>
                    <img src={Recipes.Image} alt="" width='400px' className='cursor-pointer mb-5 rounded' />
                    <div className="flex gap-2 justify-center sm:justify-end">
                        <Link id="Edit" to={`/Edit/${Recipes._id}`} key={Recipes._id} >
                            <FontAwesomeIcon icon={faPenToSquare} className="bg-orange-600 cursor-pointer font-bold p-3 rounded-full text-xl" />
                        </Link>
                        <div id="Delete">
                            <FontAwesomeIcon icon={faTrash} className="bg-orange-600 cursor-pointer font-bold p-3 rounded-full text-xl" onClick={() => handleDelete(Recipes._id)} /> 
                        </div>
                    </div>
                </div>
                <figcaption className='flex flex-col gap-5'>
                    <h2 className='font-bold text-center text-3xl sm:text-left'>{Recipes.Name}</h2>
                    <p className="text-center sm:text-left" >{Recipes.Description}</p> 
                    <h3 className='font-bold m-auto text-2xl text-center w-11/12 sm:text-left'>Ingredients</h3>
                    <pre id="Instructions" >{Recipes.Ingredients}</pre>
                    <h3 className='font-bold m-auto text-2xl text-center w-11/12 sm:text-left'>Instructions</h3>
                    <pre id="Instructions">{Recipes.Instructions}</pre>
                </figcaption>
            </figure>
        </div>
    }
    </>
)
}

export default RecipeDetails