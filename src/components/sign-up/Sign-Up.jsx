import React, { useContext, useState } from 'react';
import { When } from 'react-if';

import { AuthContext } from '../../context/auth.js';

function SignUp() {
  let auth = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleChange (e) {
    let { name, value } = e.target;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    auth.register(username, password);
  }

  return (
    <>
      <When condition={!auth.isLoggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>SignUp</button>
        </form>
      </When>
    </>
  );
}

export default SignUp;
