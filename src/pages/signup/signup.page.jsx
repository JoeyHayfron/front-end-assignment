import React from 'react';
import './signup.scss';
import CustomInput from '../../components/custom-input/custom-input.component.jsx';
import {Link, withRouter} from 'react-router-dom';
import {auth,createUserProfileDocument} from '../../firebase/firebase.util';
import ClipLoader from "react-spinners/ClipLoader";




class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            loading: false
        }
    }

    handleSubmit = (event) => {
        const {firstName, lastName, email, password} = this.state;
        event.preventDefault();
        this.setState({loading: true});
        auth.createUserWithEmailAndPassword(email, password)
        .then(async (user) => {
            console.log("First Info:", user);
            const newUser = await createUserProfileDocument(user.user, {firstName, lastName});
            if(newUser){
                this.props.history.push("/assignment/");   
                this.setState({loading: false}); 
            }    
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="signup__container">
            <h3>Register</h3>
            <form onSubmit={this.handleSubmit}>
                <CustomInput label="First Name" name="firstName" type="text" value={this.state.firstName} handleChange={this.handleChange} required/>
                <CustomInput label="Last Name" name="lastName" type="text" value={this.state.lastName} handleChange={this.handleChange} required/>
                <CustomInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange}  required/>
                <CustomInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                <button type="submit" className="register-button">Register</button>
            </form>
            <p className="account-exist">Already have an account? <Link to="/assignment/signin" className="login-sign-link">Login</Link></p>
            <ClipLoader className="loader" color="#2d2d2d" loading={this.state.loading} css=" display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-80px);" size={150} />
        </div>
        )
    }
}

export default withRouter(SignUp);