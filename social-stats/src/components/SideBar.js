import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
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
          <NavLink to="/dashtest" style={{ color: '#fff' }}><NavbarBrand className="mr-auto">SocialStats</NavbarBrand></NavLink>
          <NavbarToggler id="navToggle" onClick={this.toggleSideNav} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div style={{ paddingTop: '1.5em', paddingBottom: '1em'}}>
              <Nav navbar>
                <SideBarLinks>
                  <Link to="/dashtest" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.8em' }} fill="#2D9CDB" width="22" height="22" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    Twitter
                  </Link>
                  <Link to="/some_page" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg fill="#0077B5" style={{ marginRight: '0.8em' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </Link>
                  <Link to="/some_page2" activeStyle={{ padding: '0.3em 1em 0.3em 1em', textDecoration: 'none', color: '#F2F2F2', border: '0.04em solid #617DA3', borderRadius: '2em', backgroundColor: '#617DA3' }}>
                    <svg fill="#3b5998" style={{ marginRight: '0.8em' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    Facebook
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
