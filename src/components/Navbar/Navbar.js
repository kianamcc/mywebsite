import React from "react"
import {FaBars} from 'react-icons/fa'
import {Nav, NavLink, NavMenu, MobileIcon} from './NavbarElements'
// import logo from "../Yume.jpg" // go up one directory from components
// react router use "to" instead of href
// import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai"
// import { Link } from 'react-router-dom'


const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Kiana</h1>
                </NavLink>
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar
