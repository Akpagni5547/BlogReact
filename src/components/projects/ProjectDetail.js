import React from 'react'
import { connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import Navbar from '../layout/Navbar'

const ProjectDetails = (props) => {
    const {project, auth} = props;
        if(!auth.uid) return <Redirect to='/signin'/>
    
    console.log(props)
    if(project) {
        return (
            <>
            <Navbar />
    <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> {project.title}</span>
                    <p>{project.content} </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posté par {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        </>
        )
    } else {
        return (
            <>
            <Navbar />
            <div className="container center">
                <p>Chargement du projet ...</p>
            </div>
            </>
            )
    }

   
}
const mapStateToProps = (state, ownProps) =>{
    //console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]: null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
) (ProjectDetails)