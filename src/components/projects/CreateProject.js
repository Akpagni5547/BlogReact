import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'
import Navbar from '../layout/Navbar'
import TextEditor from './textEditor'

 class CreateProject extends Component {
     state = {
        title: '',
        content: ''
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value
         })
     }
     handleSubmit = (e) =>{
        e.preventDefault()
       // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <>
            <Navbar />
            <div className="container">
                <form  className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-tetx text-darken-3">Créer un nouvel article</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Article à rédiger</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
            </div>
                    <TextEditor/>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onSubmit={this.handleSubmit}>Ajouter</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateProject)
