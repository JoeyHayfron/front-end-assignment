import React from 'react';
import './header.styles.scss';
import{Link, withRouter} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';


const Header = ({history}) => (
      <header className="header">
          <span className="header__brand">
               <Link to="/front-end-assignment/"><h2>ASSIGNMENT</h2></Link>
          </span>
          <span>
              {
                  auth.currentUser ? 
                  <span className="link-button header__login-button" 
                  onClick={
                    () => {
                      auth.signOut()
                      .then(() => {
                        history.push("/front-end-assignment/");        
                      })
                      .catch((error) => {
                        console.log("An error occured", error.message);
                      })
                    }
                    }>
                    Logout
                  </span>
                  :
                  <Link to="/front-end-assignment/signin" className="link-button header__login-button">
                    Login
                  </Link>
              }   
          </span>
      </header >
)


export default withRouter(Header);