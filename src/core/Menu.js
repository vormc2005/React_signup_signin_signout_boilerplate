import React from 'react'
import {Link, withRouter} from 'react-router-dom'


//Helper function to change color of the ont on the tabs
const isActive = (history, path)=>{
    if(history.location.pathname===path){
        return {color:'#ff9900'}
    }else{
       return {color: '#ffffff'} 
    }
}

const Menu=({history})=> {
    return (
        <div>
           <ul className="nav nav-tabs bg-primary">
               <li className="nav-item">
                   <Link 
                        className="nav-link" 
                        style={isActive(history, '/')} 
                        to="/"  
                        >
                            Home
                    </Link>
               </li>
               <li className="nav-item">
                   <Link
                         className="nav-link" 
                         to="/signin" 
                         style={isActive(history, '/signin')}
                         >
                             Signin
                    </Link>
               </li>
               <li className="nav-item">
                   <Link
                         className="nav-link" 
                         to="/signup" 
                         style={isActive(history, '/signup')}
                         >  
                             Signup
                    </Link>
               </li>
               </ul> 
        </div>
    )
}

export default withRouter(Menu)
