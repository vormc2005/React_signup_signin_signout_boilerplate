import React  from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

const PrivateRoute=({component: Component, ...rest})=> {

    return (
        <div>
            <Route {...rest} render={props=>isAuthenticated() ? (
            <Component {...props}/>
            ) : (
            <Redirect to={{
                pathname:'/signin', 
                state:{from:props.location}}}/>)}/>
        </div>
    )
}

export default PrivateRoute