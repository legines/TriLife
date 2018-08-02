import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BoxContainer from "../../components/BoxContainer";
import { Container } from "../../components/Grid";
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    console.log("we get here");
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('userId', result.data.user._id);
        this.setState({ message: '' });
        this.props.history.push('/home');
        console.log(result);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <Container fluid>
        <BoxContainer>
          <div className="container login_screen">
            <form className="form-signin" onSubmit={this.onSubmit}>
              {message !== '' &&
                <div className="alert alert-warning alert-dismissible" role="alert">
                  { message }
                </div>
              }
              <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
              <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.onSubmit}>Login</button>
              <p>
                Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
              </p>
            </form>
          </div>
        </BoxContainer>
      </Container>
    );
  }
}

export default Login;