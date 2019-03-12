import React, { Component } from 'react';

// const Login = () => (
//   <h1>Hello this is Login.</h1>
// )

class Login extends Component<props> {
  constructor(props){
    super(props);
    this.state = {
      default: true
    }
  }

  render(){
    return <h1>Hello this is Login.</h1>;
  }
}

export default Login;
