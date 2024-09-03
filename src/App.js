import Content from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";

const App = ()=>{
  return(
    <>
    <Header/>

    <Content fName='John' message='Haiii John'/>

    <Content fName='Smith' message="Haii Smith"/>
    
    <Footer/>
    </>
  )
}

export default App;
