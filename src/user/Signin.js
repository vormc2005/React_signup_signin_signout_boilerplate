
import React, {useState} from 'react';
import { Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import {signin, authenticate} from '../auth/index'


const Signin= ()=> {
    const [values, setValues]= useState({
      
        email:'',
        password: '',
        error: '',
        loading: false, //show loading when it is loading
        redirectToReferrer: false  //Lets you to redirect user to homepage, dashboard etc.
    })
    //destructuiring to be able to send vars easier
    const { email, password, error, loading, redirectToReferrer} = values

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    //Sending user unformation to back end, user comes from clickSubmit
    
//Submit event, passing values to state
    const clickSubmit = (event)=>{
        event.preventDefault()
        setValues({...values, error: false, loading:true})
        signin({email, password})                       //
        .then(data=>{
            if(data.error){
                setValues({...values, error: data.error, loading: false})
            }else{
                authenticate(
                    data,
                    ()=>{
                        setValues({
                            ...values,
                            redirectToReferrer: true
                            
                        })
                    })
               
            }
        })
    }
//Error message
    const showError = ()=>(
        <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>
            {error}
        </div>
    )
//Success message
    const showLoading = ()=>(
       loading && (                                             //if loading show the div!!!!
       <div className = "alert alert-info">
           <h2>Loading...</h2>
    </div>)
    )

    const redirectUser =()=>{
        if(redirectToReferrer){
            return <Redirect to="/"/>
        }
    }

    const signUpForm = ()=>(
        <form >           

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input 
                     onChange={handleChange('email')}
                    type="email" 
                    className="form-control"
                    value={email}
                    />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input 
                     onChange={handleChange('password')}
                    type="password" 
                    className="form-control"
                    value={password}
                    />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    );

  return (
   <Layout 
        title="Signin Page" 
        description="Node React E-commerce App"
        className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
    {signUpForm()}
    {redirectUser()}
    {/* {JSON.stringify(values)} */}
   </Layout>
  );
}

export default Signin;
