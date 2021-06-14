import React, { Component} from 'react'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Navbarperso from '../DashboardPerso/Navbarperso'
import CarouselContainer from '../carroussel/caroussel'
 

class Dashboard extends Component {
    render(){
        console.log("helooooss")
        console.log(this.props)
        const { projects, auth } = this.props;
        console.log(auth)
        
        const choixNavbar = auth.uid ? <Navbarperso />: <Navbar />
        return(
            <>
            {choixNavbar}
            <CarouselContainer/>
            <div className="dashboard container">
                
                <div className="row">
                <div className="col s12 m6"> 
                <ProjectList projects={projects}/>
                </div>
                
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
   // console.log(state)
    return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
    }
    
}  
export default compose(
connect(mapStateToProps),
firestoreConnect([
    { collection: 'projects'}
])
)(Dashboard)
