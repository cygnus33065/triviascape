import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import * as deckActions from "../../store/deck"
import {getCategories, getSubCategories} from '../../store/category'
import {createDeck} from '../../store/deck'
import './deckForm.css'


const CreateDeckPage = () => {
  const [name, setUsername] = useState('');
  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0)

  const [errors, setErrors] = useState([])
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);
  const subCategories = useSelector(state => state.category.categories?.subCategory)
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  useEffect(() => {
    dispatch(getSubCategories(category))
  }, [dispatch, category])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionUser.id;
    const categoryId = subCategory;
    dispatch(createDeck({name, userId, categoryId}))
    history.push('/createquestion')
  }

  return (
  <form className='deck-form' onSubmit={handleSubmit}>
    <h2 className='deck-header'>Create your new deck here</h2>
    <ul>
    {errors.map((error, idx) => <li key={idx} className='errors'>{error}</li>)}
    </ul>
    <div className='deck-form-div'>
    <label className='deck-labels'>Name</label>
    <input
    type='text'
    className='deck-input'
    required
    value={name}
    onChange={(e) => setUsername(e.target.value)} />
    <label className='deck-labels'>Category</label>

    <select className='deck-category' onChange={(e) => setCategory(e.target.value)} >
      {categories?.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
    </select>
    <label className='deck-labels'>SubCategory</label>
    <select className='deck-category' onChange={(e) => setSubCategory(e.target.value)} >
      {subCategories?.map(subCategory => <option key={subCategory.id} value={subCategory.id}>{subCategory.name}</option>)}
    </select>
    <button type='submit'>Create Deck</button>
    </div>

  </form>
  )
}

export default CreateDeckPage;
