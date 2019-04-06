import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const SidebarDiv = styled.div`
  height: 100%;
  width: 15%;
  background-color: #343a40;
  transition: transform 0.3s ease-in-out;
  padding-top: 0.3em;
`;
const Sidebar = styled(Navbar)`
  height: auto;
`;
const Link = styled(NavLink)`
  justify-content: center;
  align-items: center;
  margin: 0.3em 0em 0.3em 0em;

  padding: 0.3em 1em;
  color: #E0E0E0;

  :hover{
    text-decoration: none;
    color: #fff;
  }
`;
const LogoutButton = styled(Button)`
  margin-top: 2em;
  background-color: transparent;
`;
const SideBarLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

class SideBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleSideNav(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogout(e){
    e.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    // window.location.reload();
    this.props.history.push('/login');
  }

  render(){
    var visible = "hide"

    if (this.state.isOpen){
      visible = "show"
    }

    return (
      <SidebarDiv id="sideBar" className={visible}>
        <Sidebar color="faded" dark className='bg-dark'>
          <NavLink to="/" style={{ color: '#fff' }}><NavbarBrand className="mr-auto">SocialStats</NavbarBrand></NavLink>
          <NavbarToggler id="navToggle" onClick={this.toggleSideNav} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div style={{ paddingTop: '1em', paddingBottom: '1em'}}>
              <Nav navbar>
                <SideBarLinks>
                  <Link to="/dashtest" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.8em' }} fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 16.125v2h-24v-20h2v18h22z"/></svg>
                    Twitter
                  </Link>
                  <Link to="/home" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.8em' }} fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 16.125v2h-24v-20h2v18h22z"/></svg>
                    Callback
                  </Link>
                  <Link to="/test" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.8em' }} fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 16.125v2h-24v-20h2v18h22z"/></svg>
                    Test
                  </Link>
                </SideBarLinks>
                <LogoutButton onClick={this.handleLogout}>Log out</LogoutButton>
              </Nav>
            </div>
          </Collapse>
        </Sidebar>
      </SidebarDiv>
    );
  }
}


export default withRouter(SideBar);
