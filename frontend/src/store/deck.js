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

const createDeck = ({name, userId, categoryId}) => async dispatch => {
  
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
