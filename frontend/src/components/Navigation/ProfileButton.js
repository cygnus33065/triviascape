import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {NavLink, useHistory} from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    history.push('/')
  };

  return (
    <>
      <button onClick={openMenu} className='nav-elements profile-button'>
      <i className="fas fa-address-card" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profile-items'>{user.username}</li>
          <li className='profile-items'>{user.email}</li>
          <li className='profile-items'><NavLink to='/newdeck' className='profile-items'>Create a Deck</NavLink></li>
          <li className='profile-items'><NavLink to={`/decks/${user.id}`} className='profile-items'>My Decks</NavLink></li>
          <li className='profile-items'>
            <button className='profile-items' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
