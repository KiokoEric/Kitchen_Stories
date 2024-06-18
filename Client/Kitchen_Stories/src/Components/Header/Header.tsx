import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../Hooks/useGetUserID";
import { FaUser } from "react-icons/fa6";
import Logo from "../../assets/Logo.jpg";
import Button from '../Common/Button/Button';

const Header: React.FC = () => {

    const [ Name, setName ] = useState("")
    const [ Cookie,setCookie ] = useCookies(["auth_token"]);
    const UserID = useGetUserID

    useEffect(() => {
        
        const FetchName  = async() => {
            await Axios.get(`http://localhost:4000/Users/${UserID}/Name`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((Response) => {
                setName(Response.data.Name)
            })
        } 
    
        FetchName()

    },[UserID])

    const navigate = useNavigate()

    const Logout = () => {
        setCookie("auth_token", "");
        window.localStorage.clear();
        navigate("/");
    }

return (
    <div className='flex items-center justify-between px-2 shadow-lg sticky'>
        <section>
            <Link to="/" className='flex gap-4 items-center justify-center text-black no-underline'>
                <img src={Logo} alt="" width="50px" />
                <h1 className='font-bold text-3xl'>Kitchen Stories</h1>
            </Link>
        </section>
        <section>
            <nav className='flex gap-10 items-center justify-center' >
                <Link to="/" className='text-black no-underline'>
                    Home
                </Link>
                <Link to="/Explore" className='text-black no-underline'>
                    Explore
                </Link>
                <Link to="/Categories" className='text-black no-underline'>
                    Categories
                </Link>
                <Link to="/Nationality" className='text-black no-underline'  >
                    Nationality
                </Link>
                <Link to="/Favourites" className='text-black no-underline sm: hidden'>
                    Favourites
                </Link>
                <Link to="/Create" className='text-black no-underline'>
                    Create Recipe 
                </Link>
                <Link to="/MyRecipes" className='text-black no-underline'> 
                    My Recipes
                </Link>
            </nav>
        </section>
        <section className="flex gap-2" >
        <Link to="/Favourites" className='' >
            <Button ButtonText='Favourites Recipes' ButtonStyle='bg-lightOrange px-3 py-1 rounded text-base text-white' />
        </Link>
        {
            <Link to="/Registration">
                <Button
                    ButtonText='Sign Up'
                    ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                />
            </Link>
            }
            {
            !Cookie.auth_token ?
            (
                <Link to="/Login" className='User' >
                    <Button
                        ButtonText='Login'
                        ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                    />
                </Link>
            ) : 
            (
                <Button
                    ButtonText='Add Recipe'
                    ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                    onClick={Logout}
                />
            )
        }
            <Link to={`/Profile/${UserID}`} >
                <FaUser size="2rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />
            </Link>
                {UserID ? <h4 className="font-bold"><span>Welcome</span>{Name}</h4> : null }
        </section>
    </div>
)
}

export default Header