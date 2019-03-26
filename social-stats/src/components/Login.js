import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

//styled components
const LoginDiv = styled.div`
  /* height: 100%;
  width: inherit; */
  background: #ff9966;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: calc(100% + 2em);
  width: calc(100% + 9em);
  margin-left: -8em;
  position: absolute;
  margin-top: -1em;
`;
const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 35%;
  margin-top: -1.5em;
`;
const LoginContent = styled.div`
  border: 1px solid #ccc !important;
  border-radius: 1em;
  padding: 1em 3em 1em 3em;
  -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
  background-color: #f9f9f9;
`;
const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  width: auto;
  align-items: center;
  margin: 1em;
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  object-fit: cover;
  object-position: center right;
`;
const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CustomInput = styled(Input)`
  border-radius: 0.4em;
`;
const SubmitButton = styled(Button)`
  background-color: transparent;
  border-radius: 0.7em;
  width: 75%;
  height: 2.5em;
  margin: 2em 1em 1em 1em;
  color: #000;

  :hover{
    background-color: #2D9CDB;
    border-color: transparent;
  }
`;

//main component
class Login extends Component<props> {
  constructor(props){
    super(props);
    this.state = {
      default: true
    }
  }

  render(){
    return (
      <LoginDiv>
        <LoginContainer>
          <LoginContent>
            <LoginHeader>
              <ProfileImg src="/assets/bond.png" alt="babyBond" />
              <h2>Login</h2>
            </LoginHeader>
            <LoginForm>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <CustomInput
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="username"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <CustomInput
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                  />
                </FormGroup>
              </Col>
              <SubmitButton>Login</SubmitButton>
            </LoginForm>
          </LoginContent>
        </LoginContainer>
      </LoginDiv>
    );
  }
}

export default Login;
