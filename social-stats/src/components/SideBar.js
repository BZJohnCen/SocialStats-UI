import React, { Component } from 'react';
// import { withRouter } from 'react-router';

class SideBar extends Component<props>{
  constructor(props){
    super(props)
    this.state = {
      default: true
    }
  }

  render(){
    return <h1>Hello I am sidebar.</h1>;
  }
}


export default SideBar;
