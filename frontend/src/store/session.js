import {csrfFetch} from './csrf';

export const LOGIN = 'session/LOGIN';
export const LOGOUT = 'session/LOGOUT';

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
    dispatch(login(loggedInUser))
    return loggedInUser;
  }
}

const initialState = {user:null}

const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN: {
      const {id,username, email, createdAt, updatedAt} = action.user.user
      const newState = {
        id,
        email,
        username,
        createdAt,
        updatedAt,
      }
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
