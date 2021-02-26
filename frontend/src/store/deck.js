import {csrfFetch} from './csrf'

const DECK = 'decks/DECK'
const NEWDECK = 'decks/NEWDECK'
const REMOVEDECK = 'decks/REMOVEDECK'

const newDeck = deck => ({
  type: NEWDECK,
  deck
})

const deck = deck => ({
  type: DECK,
  deck
})

const removeDeck = deckId => ({
  type: REMOVEDECK,
  deckId
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

export const getDecksUser = (userId) => async dispatch => {
  const res = await csrfFetch (`/api/decks/userdecks/${userId}`)

  const decks = await res.json()
  dispatch(deck(decks))
  return decks;
}

export const deleteDeck = (deckId) => async dispatch => {
  const res = await csrfFetch(`/api/decks/${deckId}`, {
    method: 'DELETE'
  });

  const deck = await res.json()
  dispatch(removeDeck(deckId))
  return deck;
}

const initialState = {}

const deckReducer = (state = initialState, action) => {
  switch(action.type){
    case DECK:{
      return {deck: action.deck}
    }
    case REMOVEDECK: {
      const deckId = action.deck
      return state.deck.filter(deck => deck.id !== deckId)
    }
    default:
      return state;
  }
}

export default deckReducer;
