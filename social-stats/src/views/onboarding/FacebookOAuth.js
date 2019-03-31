import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Row, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

//styled components
const OnboardingDiv = styled.div`
  /* height: 100%;
  width: inherit; */
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: calc(100% + 2em);
  width: calc(100% + 9em);
  margin-left: -8em;
  position: absolute;
  margin-top: -1em;
  z-index: 1;
`;
const OnboardingContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  margin-top: -1.5em;
`;
const OnboardingContent = styled.div`
  border: 1px solid #ccc !important;
  border-radius: 1em;
  padding: 1em 3em 1em 3em;
  margin: 3em 0em 3em 0em;
  -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
  background-color: #f9f9f9;
`;
const OnboardingHeader = styled.div`
  display: flex;
  flex-direction:row;
  position: relative;
  justify-content: center;
  height: fit-content;
  width: auto;
  align-items: center;
  margin: 2em 0em 1em 0em;
`;
const OnboardingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6em 0em 8em 0em;
`;
const AuthButton = styled(Button)`
  background-color: transparent;
  border-radius: 0.7em;
  width: fit-content;
  height: 2.5em;
  margin: 1em 1em 1em 1em;
  padding: 0.7em 2em 2.4em 2em;
  color: #000;
  -webkit-box-shadow: 0 6px 6px -6px #777;
       -moz-box-shadow: 0 6px 6px -6px #777;
            box-shadow: 0 6px 6px -6px #777;
  border-color: #000;

  :hover{
    background-color: #3b5998;
    border-color: transparent;

    #facebookLogo{
      fill: #fff;
    }
  }
`;
const ArrowButton = styled.button`
  background: none;
  border: none;

  #backArrow:hover{
    fill: #2D9CDB;
  }
  :focus{
    outline: 0;
  }
`;
const FacebookLogo = styled.span`
  padding: 0em 0em 0em 1em;
`;

//main component
class FacebookOAuth extends Component<props> {
  constructor(props){
    super(props);
    this.state = {
      default: true
    }

    this.prevPage = this.prevPage.bind(this);
  }

  prevPage(){
    this.props.history.goBack();
  }

  render(){
    return (
      <OnboardingDiv>
        <OnboardingContainer>
          <OnboardingContent>
            <OnboardingHeader>
              <div style={{position: 'absolute', left: '0px'}}>
                <ArrowButton onClick={this.prevPage}>
                  <svg id="backArrow" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
                </ArrowButton>
              </div>
              <h2>Authorize Facebook</h2>
              {/*<div style={{position: 'absolute', right: '0px'}}>
              <TwitterLogo>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#2D9CDB" width="30" height="30" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </TwitterLogo>
              </div>*/}
            </OnboardingHeader>
            <OnboardingForm>
              <Row style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <AuthButton>
                  Sign in with Facebook
                  <FacebookLogo>
                    <svg id="facebookLogo" fill="#3b5998" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </FacebookLogo>
                </AuthButton>
              </Row>
            </OnboardingForm>
            <Row style={{ position: 'relative', height: '1.5em', marginRight: '1.5em' }}>
              <div style={{position: 'absolute', right: '0px'}}>
                <Link to="/">Next</Link>
              </div>
            </Row>
          </OnboardingContent>
        </OnboardingContainer>
      </OnboardingDiv>
    );
  }
}

export default FacebookOAuth;
