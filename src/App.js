
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import BgChange from './components/BgChange';
import ComponentToggle from './components/ComponentToggle';




const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ComponentToggle/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster position='bottom-center' />

    </>
  )
}

export default App;
