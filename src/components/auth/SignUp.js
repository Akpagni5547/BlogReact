import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import Navbar from '../layout/Navbar'

 class SignUp extends Component {
     state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value
         })
     }
     handleSubmit = (e) =>{
        e.preventDefault()
        this.props.signUp(this.state)
      
    }
    render() {
        const { auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return (
            <>
            <Navbar />
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-tetx text-darken-3">Enregistrement</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Nom</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lasrNam">Prenoms</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enregistrer</button>
                        <div className="red-text center">
                            {authError? <p> {authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
 
    return {
        
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        signIn: (newUser) => dispatch(signIn(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp)
