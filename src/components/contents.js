
const Content = ({fName,message,changeHandler})=>{

  // const{fName,message} =props

  // let fName = 'Smith'
  // let message = "This is Wonderful"

 

    return(
      <>
      <h2>Hello {fName}</h2>
      <h3>Message:{message}</h3>
      <button onClick={changeHandler}>ChangeName</button>
      </>
    )
  }

  export default Content
  
  
  