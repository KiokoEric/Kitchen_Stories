import React from 'react';
import Logo from "../../assets/Logo.jpg";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
return (
    <div>
        <section>
            <Link to="/Home" className='Link'  >
                <img src={Logo} alt="" />
            </Link>
        </section>
        <section>
            <nav>
                <Link to="/Home" className='text-black no-underline'>
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
                <Link to="/Favourites" className='text-black no-underline'>
                    <p>Favourites</p>
                </Link>
                <Link to="/Create" className='text-black no-underline'>
                    <p>Create Recipe</p> 
                </Link>
                <Link to="/MyRecipes" className='text-black no-underline'> 
                    <p>My Recipes</p>
                </Link>
                <Link to="/Favourites" className='text-black no-underline'> 
                    <p>Favourites</p>
                </Link>
            </nav>
        </section>
        <section>
        <Link to="/Favourites" className='' >
            
        </Link>
        </section>
    </div>
)
}

export default Header