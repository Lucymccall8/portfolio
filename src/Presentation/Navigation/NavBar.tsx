import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
import '../styles/NavBar.css';
const NavBar: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
      <Navbar className="nav-bar" light expand="md">
        <NavbarBrand className="nav-title" href="/">Lucy McCall</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/ProjectView">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactView">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem>
          
        </NavItem>
      </Navbar>
    </div>
    );
}
export default NavBar;