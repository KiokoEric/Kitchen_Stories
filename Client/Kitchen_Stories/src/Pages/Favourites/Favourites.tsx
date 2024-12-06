import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import CookingGif from "../../assets/Cook.gif";
import React, { useEffect, useState } from 'react';
import Button from "../../Components/Common/Button/Button";
import Output from "../../Components/Common/Output/Output";
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const Favourites: React.FC = () => {

    const UserID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [RecipeID, setRecipeID] = useState<string>("")
    const [RecipeID2, setRecipeID2] = useState<string>("")
    const [RecipeID3, setRecipeID3] = useState<string>("")
    const [RecipeID4, setRecipeID4] = useState<string>("")
    const [RecipeID5, setRecipeID5] = useState<string>("")
    const [RecipeID6, setRecipeID6] = useState<string>("")
    const [Favourites, setFavourites] = useState<any>([])
    const [Favourites2, setFavourites2] = useState<any>([])
    const [Favourites3, setFavourites3] = useState<any>([])
    const [Favourites4, setFavourites4] = useState<any>([])
    const [Favourites5, setFavourites5] = useState<any>([])
    const [Favourites6, setFavourites6] = useState<any>([])
    const [FavouritesID, setFavouritesID] = useState<string>("")
    const [FavouritesID2, setFavouritesID2] = useState<string>("")
    const [FavouritesID3, setFavouritesID3] = useState<string>("")
    const [FavouritesID4, setFavouritesID4] = useState<string>("")
    const [FavouritesID5, setFavouritesID5] = useState<string>("")
    const [FavouritesID6, setFavouritesID6] = useState<string>("")

    // CALLING ON THE USER'S FAVOURITE RECIPES ID AND THE MEAL DB RECIPE ID

    useEffect(() => {

        const fetchRecipeID = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) => {
                setRecipeID(response.data[0].ID)
                setFavouritesID(response.data[0]._id)
            })
        }

        const fetchRecipeID2 = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) =>   {
                setRecipeID2(response.data[1].ID)
                setFavouritesID2(response.data[1]._id)
            })
        }

        const fetchRecipeID3 = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) =>   {
                setRecipeID3(response.data[2].ID)
                setFavouritesID3(response.data[2]._id)
            })
        }

        const fetchRecipeID4 = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) =>   {
                setRecipeID4(response.data[3].ID)
                setFavouritesID4(response.data[3]._id)
            })
        }

        const fetchRecipeID5 = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) =>   {
                setRecipeID5(response.data[4].ID)
                setFavouritesID5(response.data[4]._id)
            })
        }

        const fetchRecipeID6 = async () => {
            await axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((response) =>   {
                setRecipeID6(response.data[5].ID)
                setFavouritesID6(response.data[5]._id)
            })
        }
        if (UserID) {
            fetchRecipeID()
        } 

        if (UserID) {
            fetchRecipeID2()
        } 

        if (UserID) {
            fetchRecipeID3()
        } 

        if (UserID) {
            fetchRecipeID4()
        } 

        if (UserID) {
            fetchRecipeID5()
        } 

        if (UserID) {
            fetchRecipeID6()
        } 

    }, [UserID])

    // CALLING ON THE USER'S FAVOURITE RECIPES

    useEffect(()=> { 

        const fetchFavourites = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites(data.meals)
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch(err => console.error(err));
        }

        if (RecipeID) {
            fetchFavourites()
        }

    },[RecipeID]) 

    useEffect(()=> {  

        const fetchFavourites2 = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID2}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites2(data.meals)
            })
            .catch(err => console.error(err));
        }


        if (RecipeID2) {
            fetchFavourites2()
        }

    },[RecipeID2]) 

    useEffect(()=> {  

        const fetchFavourites3 = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID3}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites3(data.meals)
            })
            .catch(err => console.error(err));
        }


        if (RecipeID3) {
            fetchFavourites3()
        }

    },[RecipeID3]) 

    useEffect(()=> {  

        const fetchFavourites4 = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID4}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites4(data.meals)
            })
            .catch(err => console.error(err));
        }

        if (RecipeID4) {
            fetchFavourites4()
        }

    },[RecipeID4]) 


    useEffect(()=> {  

        const fetchFavourites5 = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID5}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites5(data.meals)
            })
            .catch(err => console.error(err));
        }


        if (RecipeID5) {
            fetchFavourites5()
        }

    },[RecipeID5])

    useEffect(()=> {  

        const fetchFavourites6 = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeID6}`)
            .then(response => response.json())
            .then((data) => {
                setFavourites6(data.meals)
            })
            .catch(err => console.error(err));
        }


        if (RecipeID6) {
            fetchFavourites6()
        }

    },[RecipeID6])

    // DELETE FROM FAVOURITES

    const RemoveFromFavourites = (id: any) => {
        axios.delete(`https://cook-io-server.onrender.com/Favourites/${id}`, {
            headers: { authorization: Cookie.auth_token }
        }) 
        .then(() => {
            window.location.reload()
        }
        )
    }
return (
    <div className="mb-5" >
        <p className='font-bold mb-5 mt-2 text-red-600 text-center text-xl'>Maximum number of favourites displayed is 6</p>
        <div className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'>
            {isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?  
            Favourites.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal}> 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                    />
                </div>
                )
                }) : <h2 className='font-bold text-center text-red-700 w-screen'>No Recipes Found.</h2> 
            )}
            {
            isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?  
            Favourites2.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal} > 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID2)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                    />
                </div>
                )
            })
            : ""
            )}
            {
            isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?  
            Favourites3.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal}> 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID3)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                        />
                    </div>
                    )
                }) : ""
            )}
            {
            isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?  
            Favourites4.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal}> 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID4)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                    />
                </div>
                )
                }) : ""
            )}
            {
            isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?  
            Favourites5.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal}> 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID5)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                    />
                </div>
                )
                }) : ""
            )}
            {
            isLoading ? (
                <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                    <img src={CookingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
            (Favourites.length > 0) ?   
            Favourites6.map((Item: any) => { 
                return (
                <div className="flex flex-col items-center justify-center" key={Item.idMeal}> 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal}>
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                    <Button
                        onClick={() => RemoveFromFavourites(FavouritesID6)}
                        ButtonStyle='bg-buttonOrange cursor-pointer m-auto rounded text-center text-white px-3 py-2 w-2/3 hover:bg-black'
                        ButtonText='Remove from Favourites'
                    />
                </div>
                )
                }) : ""
            )}
        </div>
    </div>
)
}
export default Favourites
