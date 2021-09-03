import React, { useContext } from 'react';
import MyInput from '../Components/UI/input';
import MyButton from '../Components/UI/button';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Login form</h1>
      <form>
        <MyInput type="text" placeholder="enter login please" />
        <MyInput type="password" placeholder="enter login password" />
        <MyButton type="submit" onClick={login}>Sign in</MyButton>
      </form>
    </div>
  );
};

export default Login;
