import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  )
}

export default App
