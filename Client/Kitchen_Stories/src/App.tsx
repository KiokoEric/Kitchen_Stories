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
const EditRecipesPage = React.lazy(() => import('./Pages/EditRecipe/EditRecipe'))
const InstructionsPage = React.lazy(() => import('./Pages/Instructions/Instructions'))
const RegistrationPage = React.lazy(() => import('./Pages/User/Registration/Registration'))
const LoginPage = React.lazy(() => import('./Pages/User/Login/Login'))
const ProfilePage = React.lazy(() => import('./Pages/User/Profile/Profile'))
const EditProfilePage = React.lazy(() => import('./Pages/User/EditProfile/EditProfile'))
const DeleteProfilePage = React.lazy(() => import('./Pages/User/DeleteProfile/DeleteProfile'))

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
        <Route path='/EditRecipe' element={ <React.Suspense><EditRecipesPage /> </React.Suspense> }/>
        <Route path='/MyRecipes' element={ <React.Suspense><MyRecipesPage /> </React.Suspense> } />
        <Route path=':MealId' element={ <React.Suspense><InstructionsPage /> </React.Suspense> } />
        <Route path='/Login' element={ <React.Suspense><LoginPage/> </React.Suspense> }/>
        <Route path='/Registration' element={ <React.Suspense><RegistrationPage /> </React.Suspense> } />
        <Route path='/Profile' element={ <React.Suspense><ProfilePage/> </React.Suspense> }/>
        <Route path='/EditProfile' element={ <React.Suspense><EditProfilePage/> </React.Suspense> }/>
        <Route path='/Delete' element={ <React.Suspense><DeleteProfilePage/> </React.Suspense> }/>
      </Routes>
    </div>
  )
}

export default App

