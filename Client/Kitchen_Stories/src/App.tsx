import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
const ExplorePage = React.lazy(() => import('./Pages/Explore/Explore'))
const CategoriesPage = React.lazy(() => import('./Pages/Categories/Categories'))
const NationalityPage = React.lazy(() => import('./Pages/Nationality/Nationality'))
const CreatePage = React.lazy(() => import('./Pages/Create/Create'))
const MyRecipesPage = React.lazy(() => import('./Pages/MyRecipes/MyRecipes'))
const InstructionsPage = React.lazy(() => import('./Pages/Instructions/Instructions'))
const LoginPage = React.lazy(() => import('./Pages/User/Login/Login'))
const RegistrationPage = React.lazy(() => import('./Pages/User/Registration/Registration'))

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Explore' element={ <React.Suspense><ExplorePage /> </React.Suspense> } />
        <Route path='/Categories' element={ <React.Suspense><CategoriesPage /> </React.Suspense> } />
        <Route path='/Nationality' element={ <React.Suspense><NationalityPage /> </React.Suspense> } />
        <Route path='/Create' element={ <React.Suspense><CreatePage /> </React.Suspense> }/>
        <Route path='/MyRecipes' element={ <React.Suspense><MyRecipesPage /> </React.Suspense> } />
        <Route path=':MealId' element={ <React.Suspense><InstructionsPage /> </React.Suspense> } />
        <Route path='/Login' element={ <React.Suspense><LoginPage/> </React.Suspense> }/>
        <Route path='/Registration' element={ <React.Suspense><RegistrationPage /> </React.Suspense> } />
      </Routes>
    </div>
  )
}

export default App

