import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams, NavLink} from 'react-router-dom'
import {getDecksUser, deleteDeck} from '../../store/deck'
import './ShowDecks.css'

const ShowDecks = () => {
  let userDecks = useSelector(state => state.deck.deck)
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const {userId} = useParams()
  const length = userDecks?.length

  useEffect(() => {
    dispatch(getDecksUser(userId))
  }, [dispatch, length])


  const deleteADeck = (e) => {
    dispatch(deleteDeck(e.target.value))
  }


  return (
    <>
    <h1>{sessionUser?.username}'s Decks</h1>
    <ul className='decks-container'>
      {userDecks?.map(deck => <li key={deck.id}>{deck.name} <button onClick={ deleteADeck} value={deck.id}>Delete Deck</button> <button><NavLink to={`/play/decks/${deck.id}`}>Play Deck</NavLink></button></li> )}
    </ul>
    </>
  )
}

export default ShowDecks;
