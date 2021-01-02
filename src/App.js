import './App.css';
import React from 'react';
import Header from './components/header/header.component.jsx'
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/home/home.page.jsx'
import SignIn from './pages/signin/signin.page.jsx'
import SignUp from './pages/signup/signup.page.jsx'
import {auth} from './firebase/firebase.util';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header user={auth.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={SignUp} />

        </Switch>
      </div>
    );
  }
}

export default App;
