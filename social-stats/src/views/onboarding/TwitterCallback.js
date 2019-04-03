import React, {
    Component
} from 'react';
import styled from '@emotion/styled';
import {
    Container,
    Row,
    Form,
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom';
import {
    setAuthVerified
} from '../../actions/index'
import {
    connect
} from 'react-redux';
import TwitterOAuthHelper from '../../twitter_oauth';
//styled components
const OnboardingDiv = styled.div `
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
const OnboardingContainer = styled(Container)
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  margin-top: -1.5em;
`;
const OnboardingContent = styled.div `
  border: 1px solid #ccc !important;
  border-radius: 1em;
  padding: 1em 3em 1em 3em;
  margin: 3em 0em 3em 0em;
  -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
  background-color: #f9f9f9;
`;
const OnboardingHeader = styled.div `
  display: flex;
  flex-direction:row;
  position: relative;
  justify-content: center;
  height: fit-content;
  width: auto;
  align-items: center;
  margin: 2em 0em 1em 0em;
`;
const OnboardingForm = styled(Form)
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6em 0em 8em 0em;
`;
const AuthButton = styled(Button)
`
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
const ArrowButton = styled.button `
  background: none;
  border: none;

  #backArrow:hover{
    fill: #2D9CDB;
  }
  :focus{
    outline: 0;
  }
`;
const FacebookLogo = styled.span `
  padding: 0em 0em 0em 1em;
`;

//main component
class TwitterCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: true
        }

        this.prevPage = this.prevPage.bind(this);
    }

    componentDidMount() {
        //example params
        //oauth_token=abc&oauth_verifier=def
        const params = new URLSearchParams(this.props.location.search)
        console.log('here')
        TwitterOAuthHelper.getCallback(params.get('oauth_token'), params.get('oauth_verifier'))
            .then(res => {
                TwitterOAuthHelper.patchUserId(localStorage.getItem('userId'),{
                    twitter: { 
                        access_token: res.access_token,
                        token_secret: res.token_secret,
                        name: res.name,
                        id: res.id
                    }
                })
                .then(db => {
                    this.props.setAuthVerified()
                    window.close()
                })
            })

    }

    prevPage() {
        this.props.history.goBack();
    }

    render() {
        // window.opener.location.reload()
        return ( <OnboardingDiv >
            <OnboardingContainer >
            <OnboardingContent >


            
            </OnboardingContent> 
            </OnboardingContainer> 
            </OnboardingDiv>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setAuthVerified: () => dispatch(setAuthVerified())
})
export default connect(null, mapDispatchToProps)(TwitterCallback);