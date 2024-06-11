import React from 'react';
import Logo from "../../assets/Logo.jpg";
import { Link } from 'react-router-dom';
import Button from '../Common/Button/Button';

const Header: React.FC = () => {
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
        <section>
        <Link to="/Favourites" className='' >
            <Button ButtonText='Favourites Recipes' ButtonStyle='bg-lightOrange px-3 py-1 rounded text-white' />
        </Link>
        </section>
    </div>
)
}

export default Header