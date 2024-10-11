
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import A from './components/A';
import C from './components/C';
import { createContext, useState } from 'react';

export const NameContext = createContext()

const App = ()=>{

  const [name,setName] = useState('Smith')

  

  return(
    <>
    <NameContext.Provider value={{name}}>
      <A/>
      <C />
    </NameContext.Provider>
   
   
 
    </>
  )
}

export default App;
