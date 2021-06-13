import React, {Component} from 'react'
import Navbarperso from '../components/DashboardPerso/Navbarperso'
import CreateProject from '../components/projects/CreateProject'



class  NouvelArticle  extends Component {
    render() {
        const {  auth } = this.props;
        console.log("helios")
        console.log(auth)
       // const choixNavbar = auth.uid ? null: null
        return (
            <div className="nouvelArticle">
               
                <Navbarperso/>
                
              <CreateProject/>
           
            </div>
        )
    }
   
}

export default NouvelArticle
