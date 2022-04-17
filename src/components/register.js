import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    register: {
        width: '400px',
        backgroundColor: '#fff',
        border: '1px solid #dddfe2',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        borderRadius: '8px',
        padding: '1rem',
        alignItems: 'center',
        textAlign: 'center',
    },
    
    input: {
        borderRadius: '8px',
        border: '2px solid #dddfe2',
        outline: 'none',
        color: '#1d2129',
        margin: '0.5rem 0',
        padding: '0.5rem 0.75rem',
        width: '92%',
        fontSize: '1rem'
    },
    
    button: {
        backgroundColor:'1877f2',
        border: '1px solid #1877f2',
        color: 'black',
        fontSize: '1.25rem',
        padding: '0.5rem',
        margin: '0.5rem 0',
        borderRadius: '8px',
        outline: 'none',
        cursor: 'pointer'
    }
    
  
  }));

const Register = () => {

    const classes = useStyles();

    const history = useHistory()

    const [ user, setUser] = useState({
        FullName: "",
        Email:"",
        Mobile:"",
        Password:"",
        confirmPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
       
        const { FullName, Email,Mobile, Password,   confirmPassword } = user
        if( FullName && Email && Mobile && Password && (Password === confirmPassword)){
            axios.post("http://localhost:4000/signup", user)
            .then( res => {
                console.log(res.data.message)
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
        
    }


    return (
        <div className={classes.register}>
            {console.log("User", user)}
            <h1>Register</h1>
            <input className={classes.input} type="text" name="FullName" value={user.FullName} placeholder="Your Name" onChange={ handleChange }></input>
            <input className={classes.input} type="text" name="Email" value={user.Email} placeholder="Your Email" onChange={ handleChange }></input>
            <input className={classes.input} type="text" name="Mobile" value={user.Mobile} placeholder="Your Mobile Number" onChange={ handleChange }></input>
            <input className={classes.input} type="password" name="Password" value={user.Password} placeholder="Your Password" onChange={ handleChange }></input>
            <input className={classes.input} type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm Password" onChange={ handleChange }></input>
            <div className={classes.button} onClick={register} >Register</div>
            <div>or</div>
            <div className={classes.button} onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register