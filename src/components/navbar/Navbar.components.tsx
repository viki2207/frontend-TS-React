import React from 'react'
import { useContext } from 'react';
import './navbar.scss'
import {Link}from "react-router-dom";
import {Menu, LightMode, DarkMode} from "@mui/icons-material";
import { ToggleButton } from '@mui/material';
import { ThemeContext } from '../../context/theme.context';

const links = [
{href:"/", label:"Home"},
{href:"/companies" , label:"Companies"},
{href:"/jobs", label:"Jobs"},
{href:"/candidates", label:"Candidates"},
]

const Navbar = () => {
    const {darkMode,toggleDarkMode} = useContext(ThemeContext);
  return (
    <div className='navbar'>
        <div className="brand">
            <span>Resume Management</span>
            <div className="menu">
                <ul>
                    {links.map(item =>(
                        <li key ={item.href}>
                            <Link to ={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hamburger">
                <Menu/>
            </div>
            <div className="toggle">
                <ToggleButton value={"check"} selected={darkMode} onChange={toggleDarkMode}>
                    {darkMode ? <LightMode/>:<DarkMode/>}
                </ToggleButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar