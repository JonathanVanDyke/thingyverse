import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './Splash/SplashContainer'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import styled from 'styled-components';

const Content = styled.div({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  width: 971,
  height: '100%',
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

//236px margin on left and right...
const App = () => (
  <Page>
    <Nav>

    </Nav>
    <Content>
      <header>
        <Route path="/" component={Splash} />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </Content>
  </Page>
);

export default App;
