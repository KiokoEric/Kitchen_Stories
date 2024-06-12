import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useGetUserID } from "../../Components/Hooks/useGetUserID";
import CookingGif from "../../assets/Cook.gif";
import Output from "../../Components/Common/Output/Output";


const Favourites: React.FC = () => {

    const UserID = useGetUserID();

    const [Cookie, setCookie] = useCookies(["auth_token"]);
    const [isLoading, setIsLoading] = useState(true)
    const [RecipeID, setRecipeID] = useState("")
    const [RecipeID2, setRecipeID2] = useState("")
    const [RecipeID3, setRecipeID3] = useState("")
    const [RecipeID4, setRecipeID4] = useState("")
    const [RecipeID5, setRecipeID5] = useState("")
    const [RecipeID6, setRecipeID6] = useState("")
    const [Favourites, setFavourites] = useState([])
    const [Favourites2, setFavourites2] = useState([])
    const [Favourites3, setFavourites3] = useState([])
    const [Favourites4, setFavourites4] = useState([])
    const [Favourites5, setFavourites5] = useState([])
    const [Favourites6, setFavourites6] = useState([])
    const [FavouritesID, setFavouritesID] = useState("")
    const [FavouritesID2, setFavouritesID2] = useState("")
    const [FavouritesID3, setFavouritesID3] = useState("")
    const [FavouritesID4, setFavouritesID4] = useState("")
    const [FavouritesID5, setFavouritesID5] = useState("")
    const [FavouritesID6, setFavouritesID6] = useState("")

    useEffect(() => {

        const fetchRecipeID = async () => {
            try{
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID(response.data[0].ID)
                        setFavouritesID(response.data[0]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchRecipeID2 = async () => {
            try {
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID2(response.data[1].ID)
                        setFavouritesID2(response.data[1]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchRecipeID3 = async () => {
            try {
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID3(response.data[2].ID)
                        setFavouritesID3(response.data[2]._id)
                })
            } catch (err) {
                console.log(err);
            }
        }

        const fetchRecipeID4 = async () => {
            try {
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID4(response.data[3].ID)
                        setFavouritesID4(response.data[3]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchRecipeID5 = async () => {
            try {
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID5(response.data[4].ID)
                        setFavouritesID5(response.data[4]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchRecipeID6 = async () => {
            try {
                await Axios.get(`https://cook-io-server.onrender.com/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setRecipeID6(response.data[5].ID)
                        setFavouritesID6(response.data[5]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
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
        } else {
            console.log("")
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
        } else {
            console.log("")
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
        } else {
            console.log("")
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
        } else {
            console.log("")
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
        } else {
            console.log("")
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
        } else {
            console.log("")
        }

    },[RecipeID6])

return (
    <div>
        <p className='Maximum'>Maximum number of favourites displayed is 6</p>
        <div className='grid grid-cols-3 gap-5 px-10'>
        {isLoading ? (
            <div  className='flex flex-auto items-center justify-center gap-5 px-10'>
                <img src={CookingGif} alt="Loading..." className="w-max" />
            </div>
        ) : (
            (Favourites.length > 0) ?  
            Favourites.map((Item: any) => { 
                return (
                <div key={Item.idMeal} > 
                    <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Item.strMealThumb}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Item.strMeal}
                        />
                    </Link>
                </div>
        )
        }) : <h2 className='Failure'>No Recipes Found.</h2> 
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
            <div key={Item.idMeal} > 
                <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Item.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Item.strMeal}
                    />
                </Link>
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
            <div key={Item.idMeal} > 
                <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Item.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Item.strMeal}
                    />
                </Link>
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
            <div key={Item.idMeal} > 
                <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Item.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Item.strMeal}
                    />
                </Link>
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
            <div key={Item.idMeal} > 
                <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Item.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Item.strMeal}
                    />
                </Link>
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
            <div key={Item.idMeal} > 
                <Link className='text-black no-underline' to={`/${Item.idMeal}`} key={Item.idMeal} >
                    <Output
                        figureStyle='flex flex-col gap-5 mb-5'
                        image={Item.strMealThumb}
                        imageStyle='rounded w-11/12'
                        TitleStyle='capitalize font-bold text-center text-3xl'
                        Title={Item.strMeal}
                    />
                </Link>
            </div>
            )
        }) : ""
        )}
        </div>
    </div>
)
}

export default Favourites