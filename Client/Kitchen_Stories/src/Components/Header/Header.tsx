import React from 'react';
import Logo from "../../assets/Logo.jpg";
import { Link } from 'react-router-dom';
import Button from '../Common/Button/Button';

const Header: React.FC = () => {
return (
    <div className='flex items-center justify-between px-2'>
        <section>
            <Link to="/Home" className='flex gap-4 items-center justify-center text-black no-underline'>
                <img src={Logo} alt="" width="50px" />
                <h1 className='font-bold text-3xl'>Kitchen Stories</h1>
            </Link>
        </section>
        <section>
            <nav className='flex gap-10 items-center justify-center' >
                <Link to="/" className='text-black no-underline'>
                    <p>Home</p> 
                </Link>
                <Link to="/Explore" className='text-black no-underline'>
                    <p>Explore</p>
                </Link>
                <Link to="/Categories" className='text-black no-underline'>
                    <p>Categories</p>
                </Link>
                <Link to="/Nationality" className='text-black no-underline'  >
                    <p>Nationality</p>
                </Link>
                <Link to="/Favourites" className='text-black no-underline sm: hidden'>
                    <p>Favourites</p>
                </Link>
                <Link to="/Create" className='text-black no-underline'>
                    <p>Create Recipe</p> 
                </Link>
                <Link to="/MyRecipes" className='text-black no-underline'> 
                    <p>My Recipes</p>
                </Link>
            </nav>
        </section>
        <section>
        <Link to="/Favourites" className='' >
            <Button ButtonText='Favourites Recipes' ButtonStyle='bg-black px-3 py-2 rounded text-white' />
        </Link>
        </section>
    </div>
)
}

export default Header