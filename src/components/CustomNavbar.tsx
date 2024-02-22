import {  Flowbite, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import LOGO from '../assets/logo.svg'

const CustomNavbar = () => {
    return ( 
       <Flowbite>
         <Navbar fluid rounded>
        <Navbar.Brand as={Link} href='/'>
          <img src={LOGO} className="mr-3 h-6 sm:h-9" alt="Word Vault" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Vocab Vault</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>

       </Flowbite>
     );
}
 
export default CustomNavbar;