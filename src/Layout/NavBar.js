import React, {useState,useContext}from 'react'
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap"
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function NavBar() {

  const context=useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="text-white">GIT HUB APP</NavbarBrand>
        <NavbarText className="text-white">{
          context.user?.email ? context.user.email: " "


        }</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto link-white" navbar>
              {
                context.user ? 
                (<NavLink onClick={()=>{context.setUser(null)}} to="/" className="text-white">Logout</NavLink>): (
                  <>
                  <NavLink tag={Link} to="/signout" className="text-white">Sign Up</NavLink>
          <NavLink tag={Link} to="/Signin" className="text-white">Login</NavLink>
                </>
                )
              }
     
        
          
          

          
         
          </Nav>
          </Collapse>
      </Navbar>
      
        </div>
    )
}
