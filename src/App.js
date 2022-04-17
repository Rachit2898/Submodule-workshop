import './App.css'
import Homepage from "./components/hompage"
import Login from "./components/login"
import Register from "./components/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  App: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  }
}));

function App() {
  const classes = useStyles();

  const [ user, setLoginUser] = useState({})
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
