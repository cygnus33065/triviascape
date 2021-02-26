import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './index.css';

const LoginForm = () => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  if (sessionUser) return(
    <Redirect to='/' />
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([''])
    return await dispatch(sessionActions.loginUser({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        // if (data.errors.length === 0) history.push('/');
        if (data && data.errors) setErrors(data.errors);
      });

  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2 className='login-header'>Please login to continue</h2>
        <ul>
        {errors.map((error, idx) => <li key={idx} className='errors'>{error}</li>)}
        </ul>
        <label className='login-labels'>Username or Email</label>
        <input
          type='text'
          placeholder='Username or Email'
          required
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          className='login-input' />
          <label className='login-labels'>Password</label>
          <input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'/>
          <button className= 'login-button' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;
