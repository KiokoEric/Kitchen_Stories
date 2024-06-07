import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Explore' element={ <Explore /> } />
      </Routes>
    </div>
  )
}

export default App
