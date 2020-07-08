import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Newfeed from './components/NewFeed/Newfeed';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Authenticate from './components/Authenticate/Authenticate';


//Redux
import { Provider } from 'react-redux';
import store from '../src/store';
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'
import { StoreContext } from "./ThemeContext";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  let { navBarAppear } = React.useContext(StoreContext);
  
  React.useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>


          {navBarAppear[0] ?<Navbar></Navbar> :"" }
          <Switch>
            <Route exact path="/" component={Authenticate}></Route>
            <Route exact path="/newfeed" component={Newfeed}></Route>
            <Route path="/profile/:id" component={Profile}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
