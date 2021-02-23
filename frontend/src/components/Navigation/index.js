import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='nav-elements nav-signup-link'>Sign Up</NavLink>
      </>
    );
  }

  return (
      <ul className='nav-container'>
        <li className='nav-list-items'>
          <NavLink exact to="/" className='nav-elements nav-home-link'>Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
  );
}

export default Navigation;
