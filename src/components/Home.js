import { FaBeer, FaEdit } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import toast from 'react-hot-toast';
const Home = ()=>{

    const editHandler=()=>{
        
    }

    const deleteHandler=()=>{
        toast.success('Deleted Successfully')
    }
    return(
        <div>
            <h2>Home</h2>
           
            <button onClick={editHandler} className='btn btn-outline-success'><FaEdit/></button>
            <button onClick={deleteHandler} className='btn btn-outline-danger'><FaTrash/></button>
           
        </div>
    )
}

export default Home