// import React from "react";
// import { Redirect } from "react-router";

// const Login = ({ onLogin , isLoggedIn}) => {

//   if (isLoggedIn) {
//     return <Redirect to="/" />
// }
//   return (
//     <div className="jumbotron" >
//       <h2 className="display-6">Login to see Profile</h2>
//       <button
//       className="btn btn-primary"
//       onClick={onLogin}>
//         Login
//       </button>
//     </div>
//   )
// }


// export default Login;



import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Redirect } from "react-router";
import "./login.css";
import { bindActionCreators } from "redux";
import React from "react";
import { setUsername, setPassword, setError } from "../../actions/actions";
import { connect } from "react-redux";






class Login  extends React.Component   {
   
  
  constructor() {
    super();

  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(evt) {
    evt.preventDefault();

    if (this.props.username !== "Admin"
        || this.props.password !== "12345" ) {
        return this.props.setError("Имя пользователя или пароль введены не верно");
    }

    this.props.setError("");
    localStorage.setItem("isAdmin", true);

    return   <Redirect to="/profile" />
}

//   if (isLoggedIn) {
//     return <Redirect to="/" />
// };
  // function validateForm() {
  //   return username.length > 0 && password.length > 0;
  // }




  render () {

    const setUsername = this.props.setUsername;
    const setPassword = this.props.setPassword;
   
  return (
    <div className="Login">
      <Form onSubmit={this.handleSubmit}>

              {
                    this.props.error &&
                    <h3>
                        {this.props.error}
                    </h3>
                }
        
        <Form.Group size="lg" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={this.props.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.props.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button 
        block size="lg" 
        type="submit" 
        // disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
  }

  }


  const mapStateToProps = (state) => ({

    username: state.username,
    password: state.password,
    error: state.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: bindActionCreators(setUsername,dispatch),
        setPassword: bindActionCreators(setPassword,dispatch),
        setError: bindActionCreators(setError,dispatch)
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Login);

