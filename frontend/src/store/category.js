import {csrfFetch} from './csrf'

export const CATEGORY = 'decks/CATEGORY'
export const SUBCATEGORY = 'decks/SUBCATEGORY'

const category = (categories) => ({
  type: CATEGORY,
  categories
})

const subCategory = (subCategory) => ({
  type: SUBCATEGORY,
  subCategory
})

export const getCategories = () => async dispatch => {
  const res = await csrfFetch('/api/categories')

  if(res.ok) {
    const categories = await res.json()
    dispatch(category(categories.categories))
    return categories.categories
  }
}

export const getSubCategories = (categoryId) => async dispatch => {
  const res = await csrfFetch(`/api/categories/${categoryId}`)

  if(res.ok) {
    const newSubCategory = await res.json();
    dispatch(subCategory(newSubCategory))
    return newSubCategory;
  }
}

const initialState = {}

const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case CATEGORY:{
       const newState = {...state};
      newState.categories = action.categories;
      return newState;
    }
    case SUBCATEGORY:{
      const newState = {...state}
      newState.categories.subCategory = action.subCategory
      return newState
    }
    default:
      return state
  }
}

export default categoryReducer;
