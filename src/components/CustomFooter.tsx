import { Link } from "react-router-dom";

const CustomFooter = () => {
    return ( 
        <footer className="bg-teal-100 p-1">
            <p className="text-center">Built by <Link to={''} className="text-teal-950 font-bold" >Kwabena</Link></p>
        </footer>
     );
}
 
export default CustomFooter;