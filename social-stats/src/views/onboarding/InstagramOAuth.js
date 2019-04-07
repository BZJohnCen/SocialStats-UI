import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Row, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

//styled components
const OnboardingDiv = styled.div`
  /* height: 100%;
  width: inherit; */
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);

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
    background-color: #d6249f;
    border-color: transparent;

    #instagramLogo{
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
const InstagramLogo = styled.span`
  padding: 0em 0em 0em 1em;
`;

//main component
class InstagramOAuth extends Component<props> {
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
              <h2>Authorize Instagram</h2>
              {/*<div style={{position: 'absolute', right: '0px'}}>
              <TwitterLogo>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#2D9CDB" width="30" height="30" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </TwitterLogo>
              </div>*/}
            </OnboardingHeader>
            <OnboardingForm>
              <Row style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <AuthButton>
                  Sign in with Instagram
                  <InstagramLogo>
                    <svg id="instagramLogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </InstagramLogo>
                </AuthButton>
              </Row>
            </OnboardingForm>
            <Row style={{ position: 'relative', height: '1.5em', marginRight: '1.5em', marginBottom: '0.5em' }}>
              <div style={{position: 'absolute', right: '0px'}}>
                <Link to="/facebook">Skip</Link>
              </div>
            </Row>
          </OnboardingContent>
        </OnboardingContainer>
      </OnboardingDiv>
    );
  }
}

export default InstagramOAuth;
