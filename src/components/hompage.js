import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    homepage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        
        backgroundColor: 'white',
        position: 'relative'
    },
    
    button: {
        backgroundColor: '#1877f2',
        border: '1px solid #1877f2',
        color: '#fff',
        fontSize: '1.25rem',
        padding: '0.5rem',
        margin: '0.5rem 0',
        borderRadius: '8px',
        outline: 'none',
        cursor: 'pointer',
    }
    
  
  }));

const Homepage = ({setLoginUser}) => {
    const classes = useStyles();
    return (
        <div className={classes.homepage}>
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage