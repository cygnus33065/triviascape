import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './index.css';

const SignupFormPage = () => {
  const [credential, setCredential] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();




}
