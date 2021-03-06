/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
const SignedInLinks = (props) => {
    
   /* console.log("helios")
    console.log(props)*/
    return(
        <ul className="right">
            
            <li><a onClick={props.signOut}>Déconnexion</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
               {props.profile.initials}
                </NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => { 
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect (null, mapDispatchToProps) (SignedInLinks)