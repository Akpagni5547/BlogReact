import React from 'react'
//import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect} from 'react-redux'
import * as ReactBootStrap from 'react-bootstrap'

const Navbar = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    
    return(
     /*   <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Helios</Link>
                {links}

            </div>
        </nav>*/
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <ReactBootStrap.Nav.Link to='/' className="brand-logo">Helios</ReactBootStrap.Nav.Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="mr-auto">
    
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      {links}      
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps) (Navbar)