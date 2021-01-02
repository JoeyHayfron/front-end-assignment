import React from 'react';
import './home.styles.scss';
import {auth,firestore} from '../../firebase/firebase.util';


class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: ''
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = firestore.doc(`users/${user.uid}`);

                const snapShot = await userRef.get();
                const userObj = await snapShot.data();
                this.setState({firstName: userObj.firstName})
                console.log(snapShot.data());
            }
          });
    }

  render(){
    return (
        <div className="container">
        {
            auth.currentUser ?
            <div>
                {
                    `Welcome ${this.state.firstName}`
                }
            </div>
            :
            <div>
                Please sign in to continue
            </div>
        }
        </div>
    )
  }
}

export default Home;