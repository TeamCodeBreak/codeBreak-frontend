import React from 'react';
import { useContext } from 'react';
import { When } from 'react-if';

import { AuthContext } from '../../context/auth.js';

function Auth(props) {

  let auth = useContext(AuthContext);

  const isLoggedIn = auth.isLoggedIn;
  const authorized = props.capability ? auth.isAuthorized(props.capability) : true;
  const okToRender = isLoggedIn && authorized;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
}

export default Auth;
