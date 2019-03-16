import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { withRouter } from 'react-router';

const SidebarDiv = styled.div`
  height: 100%;
  width: 19%;
  background-color: #343a40;
`;
const Sidebar = styled(Navbar)`
  height: auto;
`;
const Navlink = styled(NavLink)`
  justify-content: center;
  align-items: center;
`;

class SideBar extends Component<props>{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    var visible = "hide"

    if (this.state.isOpen){
      visible = "show"
    }

    return (
      <SidebarDiv id="sideBar" className={visible}>
        <Sidebar color="faded" dark className='bg-dark'>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleSideNav} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Navlink href="/components/">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 16.125v2h-24v-20h2v18h22z"/></svg>
                  Components
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href="/">GitHub</Navlink>
              </NavItem>
            </Nav>
          </Collapse>
        </Sidebar>
      </SidebarDiv>
    );
  }
}


export default SideBar;
