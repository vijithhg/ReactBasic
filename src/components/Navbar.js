import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
        <Link to="/">Home</Link> <br/>
        <Link to="/about">About</Link> <br/>
        <Link to="/gallery">Gallery</Link>
        </>
    )
}

export default Navbar