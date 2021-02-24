import {csrfFetch} from './csrf'

export const CATEGORY = 'decks/CATEGORY'

const category = () => ({
  type: CATEGORY,
})

export const getCategories = () => async dispatch => {
  const res = await csrfFetch('/api/')
}
