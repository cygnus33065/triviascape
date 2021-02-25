import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './index.css';


const SignupFormPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) =>{
    e.preventDefault()
    setErrors([''])
    return dispatch(sessionActions.signupUser({email,username,password}))
      .catch(async (res) => {
        const data = await res.json();
        if (data.errors.length === 0) {
          history.push('/')};
        if (data && data.errors) setErrors(data.errors);
      })
  }


  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2 className='signup-header'>Signup for an account.</h2>
        <ul>
        {errors.map((error, idx) => <li key={idx} className='errors'>{error}</li>)}
        </ul>
        <label className='signup-labels'>Username</label>
        <input
          type='text'
          className='signup-input'
          placeholder='Username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <label className='signup-labels'>Email</label>
        <input
          type='text'
          placeholder='Email Address'
          className='signup-input'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <label className='signup-labels'>Password</label>
        <input
          type='password'
          className='signup-input'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button className='signup-button' type='submit'>Signup</button>
      </form>
    </div>
  )


}

export default SignupFormPage;
