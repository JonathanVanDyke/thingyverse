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
import ProfileContainer from './profile/ProfileContainer'


const Content = styled.div({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  width: 971,
  // height: '100%',
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
  width: 100%;
  Height: 100%;
  z-index: 10;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
          <Route exact path="/profile" component={ProfileContainer} />
        </Switch>
      </Content>
    </Page>
  </Wrap>
);

export default App;
