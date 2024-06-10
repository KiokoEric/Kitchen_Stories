import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';
import Categories from './Pages/Categories/Categories';
import Nationality from './Pages/Nationality/Nationality';
import Create from './Pages/Create/Create';
import MyRecipes from './Pages/MyRecipes/MyRecipes';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Explore' element={ <Explore /> } />
        <Route path='/Categories' element={ <Categories /> } />
        <Route path='/Nationality' element={ <Nationality /> } />
        <Route path='/Create' element={ <Create /> } />
        <Route path='/MyRecipes' element={ <MyRecipes /> } />
      </Routes>
    </div>
  )
}

export default App
