import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

//styled components
const SignupDiv = styled.div`
  /* height: 100%;
  width: inherit; */
  background: #FF5F6D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #FFC371, #FF5F6D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #FFC371, #FF5F6D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: calc(100% + 2em);
  width: calc(100% + 9em);
  margin-left: -8em;
  position: absolute;
  margin-top: -1em;
  z-index: 1;
`;
const SignupContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  margin-top: -1.5em;
`;
const SignupContent = styled.div`
  border: 1px solid #ccc !important;
  border-radius: 1em;
  padding: 1em 3em 1em 3em;
  margin: 3em 0em 3em 0em;
  -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
  background-color: #f9f9f9;
`;
const SignupHeader = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  height: fit-content;
  width: auto;
  align-items: center;
  margin: 2em 0em 3em 0em;
`;
const SignupForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ColGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CustomInput = styled(Input)`
  border-radius: 0.4em;
  -webkit-box-shadow: 0 6px 6px -6px #777;
       -moz-box-shadow: 0 6px 6px -6px #777;
            box-shadow: 0 6px 6px -6px #777;
`;
const SubmitButton = styled(Button)`
  background-color: transparent;
  border-radius: 0.7em;
  width: 75%;
  height: 2.5em;
  margin: 2em 1em 1em 1em;
  color: #000;
  -webkit-box-shadow: 0 6px 6px -6px #777;
       -moz-box-shadow: 0 6px 6px -6px #777;
            box-shadow: 0 6px 6px -6px #777;

  :hover{
    background-color: #2D9CDB;
    border-color: transparent;
  }
`;
const Arrow = styled.span`
  display: flex;
`;

//main component
class Signup extends Component<props> {
  constructor(props){
    super(props);
    this.state = {
      default: true
    }
  }


  render(){
    return (
      <SignupDiv>
        <SignupContainer>
          <SignupContent>
            <SignupHeader>
              <Arrow>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
              </Arrow>
              <h2>Sign Up</h2>
            </SignupHeader>
            <SignupForm>
              <Row style={{width: '100%'}}>
                <Col md="6" sm={12}>
                  <FormGroup>
                    <Label>Name</Label>
                    <CustomInput
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="John Smith"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">Company Name</Label>
                    <CustomInput
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Desk Nibbles"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">Company Website</Label>
                    <CustomInput
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="www.desknibbles.ca"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">Industry</Label>
                    <CustomInput
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Food"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Username</Label>
                    <CustomInput
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="username"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <CustomInput
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <CustomInput
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <SubmitButton>Next</SubmitButton>
            </SignupForm>
          </SignupContent>
        </SignupContainer>
      </SignupDiv>
    );
  }
}

export default Signup;
