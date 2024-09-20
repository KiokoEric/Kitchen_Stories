import axios from "axios";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import Logo from "../../assets/Logo.jpg";
import { useCookies } from "react-cookie";
import Button from '../Common/Button/Button';
import { IoIosBookmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Navigate from "../Common/Navigate/Navigate";
import React, { useEffect, useState } from 'react';
import { useGetUserID } from "../Hooks/useGetUserID";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header:React.FC = () => {

    const UserID = useGetUserID()
    const navigate = useNavigate()
    const [ Cookie,setCookie ] = useCookies(["auth_token"]); 

    // USESTATE HOOK

    const [ Name, setName ] = useState<string>("")
    const [ ExtendNavbar, setExtendNavbar ] = useState<boolean>(false)

    // OPENING AND CLOSING OF THE MOBILE MENU

    const toggleMenu = () => {
        setExtendNavbar(!ExtendNavbar);
    };

    // RECEIVING THE NAME OF THE USER

    useEffect(() => {
        
        const FetchName  = async() => {
            await axios.get(`http://localhost:4000/Users/${UserID}/Name`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((Response) => {
                setName(Response.data.Name)
            })
        } 
    
        FetchName()

    },[UserID])

    // LOGGING OUT OF ONE'S ACCOUNT

    const Logout = () => {
        setCookie("auth_token", "");
        window.localStorage.clear();
        navigate("/");
        window.location.reload();
    }

return (
    <div className='flex items-center justify-between px-1 shadow-lg sticky'>
        <section>
            <Link to="/Home" className='flex gap-2 items-center justify-center text-black no-underline'>
                <img src={Logo} alt="" width="50px" />
                <h1 className='font-bold text-xl sm:text-3xl'>Kitchen Stories</h1>
            </Link>
        </section>
        {/* NAVIGATION LINKS (HIDDEN ON MOBILE)  */}
        <nav className='hidden xl:flex xl:gap-10 xl:items-center xl:justify-center'>
            <Navigate
                Navigation="/Home"
                NavigateStyle="text-black no-underline"
                NavigateText="Home"
            />
            <Navigate
                Navigation="/Explore"
                NavigateStyle="text-black no-underline"
                NavigateText="Explore"
            />
            <Navigate
                Navigation="/Categories"
                NavigateStyle="text-black no-underline"
                NavigateText="Categories"
            />
            <Navigate
                Navigation="/Nationality"
                NavigateStyle="text-black no-underline"
                NavigateText="Nationality"
            />
            <Navigate
                Navigation="/Create"
                NavigateStyle="text-black no-underline"
                NavigateText="Create Recipe"
            />
            <Navigate
                Navigation="/MyRecipes"
                NavigateStyle="text-black no-underline"
                NavigateText="My Recipes"
            />
        </nav>
        <section className="hidden xl:flex items-center justify-center gap-2">
        <Link to="/Favourites">
            <Button ButtonText='Favourites Recipes' ButtonStyle='bg-lightOrange flex gap-2 items-center px-3 py-1 rounded text-base text-white' Children={<IoIosBookmark size="1.2rem" />} />
        </Link>
        {   !UserID?
            <Link to="/Registration">
                <Button
                    ButtonText='Sign Up'
                    ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                />
            </Link> : null
        }
        {
        !Cookie.auth_token ?
        (
            <Link to="/">
                <Button
                    ButtonText='Login'
                    ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                />
            </Link>
        ) : 
        (
        <Button
            ButtonText='Logout'
            ButtonStyle='bg-black cursor-pointer h-8 text-center text-base text-white px-3 py-1 rounded'
            onClick={Logout}
        />
        )
        }
        {
            UserID ? 
            <Link to={`/Profile/${UserID}`}>
                <FaUser size="2rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />
            </Link> : null
        }
        { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
    </section>
    <div className="xl:hidden flex items-center gap-3">
        {
            UserID ? 
            <Link to={`/Profile/${UserID}`}>
                <FaUser size="1.8rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />
            </Link> : null
        }
        <button onClick={toggleMenu} className="focus:outline-none">
            {ExtendNavbar ? <FontAwesomeIcon icon={faX} className="text-sm" /> : <FontAwesomeIcon icon={faBars} className="text-base" />}
        </button>
        { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
        {/* MOBILE MENU */}
        {ExtendNavbar && (
            <nav className="bg-white absolute top-11 mt-1.5 right-0 flex flex-col gap-4 m-auto pl-4 pt-2 pb-8 rounded-Header text-base text-black w-36 xl:hidden">
                <Navigate
                    Navigation="/Home"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Home"
                />
                <Navigate
                    Navigation="/Explore"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Explore"
                />
                <Navigate
                    Navigation="/Categories"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Categories"
                />
                <Navigate
                    Navigation="/Nationality"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Nationality"
                />
                <Navigate
                    Navigation="/Create"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Create Recipe"
                />
                <Navigate
                    Navigation="/MyRecipes"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="My Recipes"
                />
                <Navigate
                    Navigation="/Favourites"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Favourites"
                />
                {
                    !UserID? <Navigate
                        Navigation="/Registration"
                        NavigateStyle="border-b border-black text-black no-underline w-28"
                        NavigateText="Sign Up"
                    /> : null
                }
                {
                    !Cookie.auth_token ?
                    (
                        <Navigate
                            Navigation="/"
                            NavigateStyle="border-b border-black text-black no-underline w-28"
                            NavigateText="Login"
                            />
                        ) : 
                        (
                            <Navigate
                                NavigateStyle="border-b border-black text-black no-underline w-28"
                                NavigateText="Logout"
                                onClick={Logout}
                            />
                        )
                    }
                </nav>
            )}
        </div>
    </div>
)
}

export default Header