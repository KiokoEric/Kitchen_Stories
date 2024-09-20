import './App.css';
import React from 'react';
import Login from './Pages/User/Login/Login';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useGetUserID } from './Components/Hooks/useGetUserID';
import ErrorBoundary from './Pages/ErrorBoundary/ErrorBoundary';
const HomePage = React.lazy(() => import('./Pages/Home/Home'))
const CreatePage = React.lazy(() => import('./Pages/Create/Create'))
const ExplorePage = React.lazy(() => import('./Pages/Explore/Explore'))
const ProfilePage = React.lazy(() => import('./Pages/User/Profile/Profile'))
const MyRecipesPage = React.lazy(() => import('./Pages/MyRecipes/MyRecipes'))
const FavouritesPage = React.lazy(() => import('./Pages/Favourites/Favourites'))
const CategoriesPage = React.lazy(() => import('./Pages/Categories/Categories'))
const EditRecipesPage = React.lazy(() => import('./Pages/EditRecipe/EditRecipe'))
const NationalityPage = React.lazy(() => import('./Pages/Nationality/Nationality'))
const InstructionsPage = React.lazy(() => import('./Pages/Instructions/Instructions'))
const EditProfilePage = React.lazy(() => import('./Pages/User/EditProfile/EditProfile'))
const RecipeDetailsPage = React.lazy(() => import('./Pages/RecipeDetails/RecipeDetails'))
const RegistrationPage = React.lazy(() => import('./Pages/User/Registration/Registration'))
const DeleteProfilePage = React.lazy(() => import('./Pages/User/DeleteProfile/DeleteProfile'))

function App() {

  const ID = useGetUserID()

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route path='/Registration' element={<React.Suspense><RegistrationPage /> </React.Suspense> }/>
        <Route path='/Home' element={ID ? <React.Suspense><HomePage /></React.Suspense> : <ErrorBoundary />} />
        <Route path='/Create' element={ID ? <React.Suspense><CreatePage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Explore' element={ID ? <React.Suspense><ExplorePage /> </React.Suspense> : <ErrorBoundary /> } />
        <Route path='/Favourites' element={ID ? <React.Suspense><FavouritesPage/> </React.Suspense> : <ErrorBoundary />}/>
        <Route path='/MyRecipes' element={ID ? <React.Suspense><MyRecipesPage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path=':MealId' element={ID ? <React.Suspense><InstructionsPage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Edit/:_id' element={ID ? <React.Suspense><EditRecipesPage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Categories' element={ID ? <React.Suspense><CategoriesPage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Profile/:userID' element={ID ? <React.Suspense><ProfilePage/> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Nationality' element={ID ? <React.Suspense><NationalityPage /> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/DeleteProfile' element={ID ? <React.Suspense><DeleteProfilePage/> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/Information/:id' element={ID ? <React.Suspense><RecipeDetailsPage/> </React.Suspense> : <ErrorBoundary /> }/>
        <Route path='/EditProfile/:userID' element={ID ? <React.Suspense><EditProfilePage/> </React.Suspense> : <ErrorBoundary /> }/>
      </Routes>
    </>
  )
}

export default App