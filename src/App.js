import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ListeArticles from './pages/ListeArticles'
import NouveauArticle from './pages/NouveauArticle'
//import CarouselContainer from './components/carroussel/caroussel'

//import Navbar from './components/layout/Navbar'
//import Navbarperso from './components/DashboardPerso/Navbarperso'



class App extends Component {
  
  render() {
    
    
    return (
      
      <BrowserRouter>
      <div className="App">
        
      
        <Switch>

          <Route exact path='/' component={Dashboard}/>
          <Route path='/NouveauArticle' component={NouveauArticle}/>
          <Route path='/ListeArticles' component={ListeArticles}/>
          <Route path='/project/:id' component={ProjectDetails }/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
      </BrowserRouter>
      
    );
  }

  
}

export default App
