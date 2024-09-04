import { useState } from "react";
import Content from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";

const App = ()=>{

  const[fName,setFName] = useState('John') 

  // let fName='John'
  let message='Message'

  const changeHandler=()=>{
    setFName('Smith')
  }
  return(
    <>
    <Header/>

    <Content fName={fName} message={message} changeHandler={changeHandler}/>

   
    <Footer/>
    </>
  )
}

export default App;
