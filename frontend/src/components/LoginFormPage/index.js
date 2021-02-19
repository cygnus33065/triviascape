import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom';
import * as sessionActions from '../../store/session';

const LoginFormPage = () => {
  const [credential, setCredential] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  if (sessionUser) return(
    <Redirect to='/' />
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([''])
    return dispatch(sessionActions.loginUser({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors ? <ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul> : <div />}
      <input
        type='text'
        placeholder='Enter your username or email address'
        required
        value={credential}
        onChange={(e) => setCredential(e.target.value)} />
        <input
          type='password'
          placeholder='Please enter your password'
          requiredvalue={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginFormPage;
