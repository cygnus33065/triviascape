import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import { handleValidationErrors } from '../../../../backend/utils/validation';
import * as deckActions from "../../store/deck"
//import './deckForm.css'

const CreateDeckPage = () => {
  const [name, setUsername] = useState('');
  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0)
  const [errors, setErrors]
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {

  }

  return (
  <form className='deck-form' onSubmit={handleSubmit}>
    <h2 className='deck-header'>Create your new deck here</h2>
    <ul>
    {errors.map((error, idx) => <li key={idx} className='errors'>{error}</li>)}
    </ul>
    <label className='deck-labels'>Name</label>
    <input
    type='text'
    className='deck-input'
    required
    value={name}
    onChange={(e) => setUsername(e.target.value)} />
    <label className='deck-labels'>Category</label>
    <select className='deck-category'
  </form>
  )
}
