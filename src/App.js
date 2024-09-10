
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import TableData from './components/TableData';
import Gallery from './components/Gallery';



const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/table' element={<TableData/>}/>
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
    <Toaster position='bottom-center' />

    </>
  )
}

export default App;
