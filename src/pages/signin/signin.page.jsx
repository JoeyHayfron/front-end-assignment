import React from 'react';
import './signin.scss';
import CustomInput from '../../components/custom-input/custom-input.component.jsx';
import {Link, withRouter} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util';
import ClipLoader from "react-spinners/ClipLoader";


class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        this.setState({loading: true});
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            if(user)
                this.props.history.push("/");

                this.setState({loading: false});

        })
        .catch((error) => {
          console.log("An error occured",error.message)
          this.setState({loading: false});

        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name] : value});
    }

    render(){
        return (
            <div className="signin__container">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <CustomInput label="Password" type="password"  name="password" value={this.state.password}  handleChange={this.handleChange} required/>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="account-exist">Don't have an account? <Link to="/register" className="login-sign-link">Register</Link></p>
                <ClipLoader className="loader" color="#2d2d2d" loading={this.state.loading} css=" display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-80px);" size={100} />

            </div>
        )
    }
} 

export default withRouter(SignIn);