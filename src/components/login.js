import React, {useState} from "react"

import axios from "axios"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    login: {
        width: '400px',
        background: '#fff',
        border: '1px solid #dddfe2',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        borderRadius: '8px',
        padding: '1rem',
        alignItems: 'center',
        textAlign: 'center'
    },
    
    input: {
        borderRadius: '8px',
        border: '2px solid #dddfe2',
        outline: 'none',
        color: '#1d2129',
        margin: '0.5rem 0',
        padding: '0.5rem 0.75rem',
        width: '92%',
        fontSize: '1rem',
    },
    
    button:{
        backgroundColor: '#1877f2',
        border: '1px solid #1877f2',
        color: '#fff',
        fontSize: '1.25rem',
        padding: '0.5rem',
        margin: '0.5rem 0',
        borderRadius: '8px',
        outline: 'none',
        cursor: 'pointer'
    }
    
  
  }));

const Login = ({ setLoginUser}) => {
    const classes=useStyles();

    const history = useHistory()

    const [ user, setUser] = useState({
        Email:"",
        Password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:4000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
   

    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <input className={classes.input} type="text" name="Email" value={user.Email} onChange={handleChange} placeholder="Enter your Email"></input>

            <input className={classes.input} type="password" name="Password" value={user.Password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div  className={classes.button} onClick={login}>Login</div>
            <div>or</div>
            <div className={classes.button} onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login