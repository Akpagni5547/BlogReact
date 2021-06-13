import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SlidebarData'

//import Navbarpersos from './Navbarperso.module.css'
import './Navbarperso.css'
//import SignedInLinks from '../layout/SignedInLinks'
//import SignedOutLinks from '../layout/SignedOutLinks'
import {IconContext} from 'react-icons'
//import * as ReactBootStrap from 'react-bootstrap'

function Navbarperso() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar (!sidebar)
    return (
        <>
        <IconContext.Provider value={ {color: 'white'}}>
        <div className='navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/> 
            
          </Link>
          
          <ul className="right">
          <li><NavLink to='/create'>Nouvel article</NavLink></li>
          <li><NavLink to='/create'>decoo</NavLink></li>
          </ul>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
          <ul className='nav-menu-items' onClick={showSidebar}>
            
            <li className='navbar-toggle'>

              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              
              </Link>
            </li>
            
            {SidebarData.map((item, index) =>{
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    
                  </Link>
                </li>
              
              )
            })}
          </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbarperso
