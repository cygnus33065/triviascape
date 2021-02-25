import {csrfFetch} from './csrf'

const QUESTION = 'questions/QUESTION'

const newQuestion = question => ({
  type:QUESTION,
  question
})

export const createQuestion = ({question, answer, deckId}) => async dispatch => {
  const res = await csrfFetch ('/api/questions', {
    method: 'POST',
    body: JSON.stringify({question, answer, deckId})
  })

  if (res.ok) {
    const createdQuestion = await res.json()
    dispatch(newQuestion(createdQuestion));
    return createQuestion;
  }
}

const initialState = {}

const questionReducer = (state = initialState, action) => {
  switch(action.type){
    case QUESTION:{
      const newState = {...state}
      const newQuestion = action.question
      const questions = {...state.question, [newQuestion.id]: newQuestion}
      newState.question = questions
      return newState;
    }
    default:
      return state
  }
}


export default questionReducer;
