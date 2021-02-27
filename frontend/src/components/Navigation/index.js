import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch()

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    history.push('/')
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li className='nav-list-items'>{sessionUser?.username}</li>
        <li className='nav-list-items'>{sessionUser?.email}</li>
        <li className='nav-list-items'><NavLink to='/newdeck' className='nav-elements'>Create a Deck</NavLink></li>
        <li className='nav-list-items'><NavLink to={`/decks/${sessionUser?.id}`} className='nav-elements'>My Decks</NavLink></li>
         <li className='nav-list-items'>
           <div className='nav-elements' onClick={logout}>Log Out</div>
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
        <NavLink to="/signup" className='nav-elements'>Sign Up</NavLink>
        </li>
      </>
    );
  }


  return (
      <ul className='nav-bar'>
        <div className='nav-items-constainer'>
          <li className='nav-list-items'>
            <NavLink className='nav-elements' exact to="/" >Triviascape</NavLink>
          </li>
          {isLoaded && sessionLinks}
        </div>
      </ul>
  );
}

export default Navigation;
