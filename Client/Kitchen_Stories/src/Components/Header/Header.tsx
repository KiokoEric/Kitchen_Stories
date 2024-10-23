import axios from "axios";
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
        <Navigate
            Navigation="/Home"
            children={<img src={Logo} alt="" width="50px" />}
            NavigateStyle="flex gap-2 font-bold items-center justify-center text-black text-2xl no-underline sm:text-3xl"
            NavigateText="Kitchen Stories"
        />
        </section>
        {/* NAVIGATION LINKS (HIDDEN ON MOBILE)  */}
        <nav className='hidden xl:flex xl:gap-10 xl:items-center xl:justify-center'>
            <Navigate
                Navigation="/Home"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="Home"
            />
            <Navigate
                Navigation="/Explore"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="Explore"
            />
            <Navigate
                Navigation="/Categories"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="Categories"
            />
            <Navigate
                Navigation="/Nationality"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="Nationality"
            />
            <Navigate
                Navigation="/Create"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="Create Recipe"
            />
            <Navigate
                Navigation="/MyRecipes"
                NavigateStyle="text-black no-underline hover:text-Orange"
                NavigateText="My Recipes"
            />
        </nav>
        <section className="hidden xl:flex items-center justify-center gap-2">
        <Navigate
            Navigation="/Favourites"
            children={<IoIosBookmark size="1.2rem" />} 
            NavigateStyle="bg-lightOrange cursor-pointer flex gap-2 items-center px-3 py-1 rounded text-base text-white hover:bg-black"
            NavigateText="Favourite Recipes"
        />
        {!UserID?
            <Navigate
                Navigation="/Registration"
                NavigateStyle="bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded"
                NavigateText="Sign Up"
            />  : null
        }
        {
        !Cookie.auth_token ?
        (
            <Navigate
                Navigation="/"
                NavigateStyle="bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded"
                NavigateText="Login"
            />
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
            <Navigate
                ID='ProfileIcon'
                Navigation={`/Profile/${UserID}`}
                children={<FaUser size="2rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />}
            /> : null
        }
        { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
    </section>
    <div className="xl:hidden flex items-center gap-3">
        {
        UserID ? 
            <Navigate
                ID='ProfileIcon'
                Navigation={`/Profile/${UserID}`}
                children={<FaUser size="1.8rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />}
            /> : null
        }
        <Button
            Children={ExtendNavbar ? <FontAwesomeIcon icon={faX} className="text-sm" /> : <FontAwesomeIcon icon={faBars} className="text-base" />}
            ButtonStyle='focus:outline-none'
            onClick={toggleMenu}
        />
        { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
        {/* MOBILE MENU */}
        {ExtendNavbar && (
            <nav className="bg-white absolute top-11 mt-1.5 right-0 flex flex-col gap-4 m-auto pl-4 pt-2 pb-8 rounded-Header text-base text-black w-36 z-50 xl:hidden">
                <Navigate
                    Navigation="/Home"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Home"
                />
                <Navigate
                    Navigation="/Explore"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Explore"
                />
                <Navigate
                    Navigation="/Categories"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Categories"
                />
                <Navigate
                    Navigation="/Nationality"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Nationality"
                />
                <Navigate
                    Navigation="/Create"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Create Recipe"
                />
                <Navigate
                    Navigation="/MyRecipes"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="My Recipes"
                />
                <Navigate
                    Navigation="/Favourites"
                    NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                    NavigateText="Favourites"
                />
                {
                    !UserID? <Navigate
                        Navigation="/Registration"
                        NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                        NavigateText="Sign Up"
                    /> : null
                }
                {
                !Cookie.auth_token ?
                (
                    <Navigate
                        Navigation="/"
                        NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
                        NavigateText="Login"
                        />
                    ) : 
                    (
                        <Navigate
                            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Orange"
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
