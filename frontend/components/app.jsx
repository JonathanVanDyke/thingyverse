import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import styled from 'styled-components';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash/SplashContainer';
import Home from './home/Home';
import ProfileContainer from './profile/ProfileContainer';
import PrintShowContainer from './prints/PrintShowContainer';
import PrintFormContainer from './prints/PrintFormContainer';
import EditPrintContainer from './prints/EditPrintContainer';

const Content = styled.div({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  width: 971,
  height: '100vh',
  background: '#f5f5f5',
  // border: '1px solid red'
});

const Page = styled.div({
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  background: '#f5f5f5',
  // border: '1px solid red'
});

const Nav = styled.nav({
  position: 'absolute',
  width: '100%',
  height: 60,
  // background: '#f1f1f1',
  backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #e8e8e8)',
  borderBottom: '1px solid #bebebe',
})

const Header = styled.header`
  z-index: 10;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: 30px;
  width: 100%;
  Height: 70px;
  z-index: 10;
  // background-color: black;
  background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);
  border-top: 1px solid #bebebe;
  align-self: flex-end;
  position: absolute;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  z-index: -10;
  // position:absolute;
`

const Label = styled.div`
  font-size: 20px;
  color: #666666;
  padding: 10px;
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  font-weight: bolder;
`

const FootNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  width: 184px;
  // background-color: grey;

`

const FootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 970px;
`

const FootLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #666666;
  :hover {
    color: black;
  }
`

//236px margin on left and right...
const App = () => (
  <Wrap>
    <Page>
      <Nav>

      </Nav>
      <Content>
        <Header>
          <Route path="/" component={Splash} />
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/logged-in" component={SignUpFormContainer} />
          <Route exact path="/profile/:userId" component={ProfileContainer} />
          <Route exact path="/profile/:userId/prints" component={ProfileContainer} />
          <Route exact path="/print/:printId" component={PrintShowContainer} />
          <Route exact path="/create" component={PrintFormContainer} />
          <Route exact path="/edit/:printId" component={EditPrintContainer} />
        </Switch>

      </Content>
      <Footer>
        <FootWrap>
          <Label>Thingyverse</Label>
          <FootNav>
            <FootLink 
              href="https://github.com/JonathanVanDyke"
            >My Github</FootLink>
            <FootLink 
              href="https://www.linkedin.com/in/jonathanvandykeengineering/"
            >My LinkedIn</FootLink>
          </FootNav>
        </FootWrap>
      </Footer>
    </Page>
  </Wrap>
);

export default App;
