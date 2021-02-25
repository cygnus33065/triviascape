import {csrfFetch} from './csrf'

export const DECK = 'decks/DECK'
export const NEWDECK = 'decks/NEWDECK'

const newDeck = deck => ({
  type: NEWDECK,
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
  console.log(action)
  switch(action.type){
    case DECK:{
      return {deck: action.deck}
    }
    default:
      return state;
  }
}

export default deckReducer;
