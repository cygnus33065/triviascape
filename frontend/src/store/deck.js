import {csrfFetch} from './csrf'

export const DECK = 'decks/DECK'
export const NEWDECk = 'decks/NEWDECK'

const newDeck = deck => ({
  type: NEWDECk,
  deck
})

const deck = deck => ({
  type: DECK,
  deck
})

export const createDeck = ({name, userId, categoryId}) => async dispatch => {
  const res = await csrfFetch ('/api/decks', {
    method: 'POST',
    body: JSON.stringify({name, userId, categoryId})
  })

  if (res.ok) {
    const createdDeck = await res.json();
    dispatch(deck(createdDeck));
    return createdDeck;
  }
}

export const getDeck = ({}) => async dispatch => {
  const res = await csrfFetch ('/api/deck/:deckId')

  const deck = await res.json();
  dispatch(deck(deck))
  return deck;
}


const initialState = {}

const deckReducer = (state = initialState, action) => {
  switch(action.type){
    case DECK:{
      newState = {}
      newState.deck = action.deck;
      return newState;
    }
    default:
      return state;
  }
}

export default deckReducer;
