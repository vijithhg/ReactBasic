
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';


const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
