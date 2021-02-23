import {csrfFetch} from './csrf';

export const LOGIN = 'session/LOGIN';
export const LOGOUT = 'session/LOGOUT';
export const SIGNUP = 'users/SIGNUP'

export const login = user => ({
  type: LOGIN,
  user
})

export const logout = () => ({
  type: LOGOUT
})


export const loginUser = ({credential, password}) => async dispatch => {
  const res = await csrfFetch ('/api/session', {
    method: 'POST',
    body: JSON.stringify({credential, password})
  })

  if (res.ok) {
    const loggedInUser = await res.json();
    dispatch(login(loggedInUser.user))
    return loggedInUser;
  }
}


export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(login(data.user));
  return response;
};

export const signupUser = ({email, username, password}) => async dispatch => {
  const res = await csrfFetch ('/api/users', {
    method: 'POST',
    body: JSON.stringify({email, username, password})
})

  if (res.ok) {
    const loggedInUser = await res.json();
    dispatch(login(loggedInUser))
    return loggedInUser;
  }
}

export const logoutUser = () => async dispatch => {
  const res = await csrfFetch ('/api/session', {
    method: 'DELETE',
  })
    dispatch(logout());
    return res
}

const initialState = {user:null}

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case LOGIN: {
      newState = {};
      newState.user = action.user;
      return newState;
    }
    case LOGOUT: {
     const newState = initialState
      return newState;
    }
    default:
      return state;
  }
}


export default sessionReducer;
