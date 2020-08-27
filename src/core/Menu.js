import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'


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
              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                   <li className="nav-item">
                   <Link
                         className="nav-link" 
                         to="/user/dashboard" 
                         style={isActive(history, '/user/dashboard')}
                         >  
                            Dashboard
                    </Link>
               </li>
              )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                   <li className="nav-item">
                   <Link
                         className="nav-link" 
                         to="/admin/dashboard" 
                         style={isActive(history, '/admin/dashboard')}
                         >  
                            Dashboard
                    </Link>
               </li>
              )}

                {!isAuthenticated() && (

                    <Fragment>
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
                    </Fragment>
                )
                }
              {isAuthenticated() && (
                   <li className="nav-item">
                   <span
                         className="nav-link" 
                         to="/signout" 
                         style={{cursor: 'pointer', color: '#ffffff'}}
                         onClick={()=>signout(()=>{
                             history.push('/')
                         })}
                         >  
                             Signout
                    </span>
               </li>
              )}

        
               </ul> 
        </div>
    )
}

export default withRouter(Menu)
