import {csrfFetch} from './csrf'

const QUESTION = 'questions/QUESTION'
const PLAY = 'questions/PLAY'

const newQuestion = question => ({
  type:QUESTION,
  question
})

const playQuestions = questions => ({
  type:PLAY,
  questions
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

export const deckQuestions = (deckId) => async dispatch => {
  const res = await csrfFetch(`/api/questions/${deckId}`)

  if (res.ok) {
    const questions = await res.json(res)
    dispatch(playQuestions(questions))
    return questions;
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
    case PLAY:{
      // const newState = {question: [action.questions]}
      return action.questions;
    }
    default:
      return state
  }
}


export default questionReducer;
