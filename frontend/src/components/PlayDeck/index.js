import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {deckQuestions} from '../../store/question'
import "./PlayDeck.css"

const PlayDeck = () => {
  const dispatch = useDispatch()
  const {deckId} = useParams()
  const [question, setQuestion] = useState()
  const [isQuestion, setIsQuestion] = useState(true)
  const [isArray, setIsArray] = useState(true)

  let questions = useSelector(state => state.question)


  useEffect(() => {
    dispatch(deckQuestions(deckId))
  }, [dispatch])

  useEffect(() => {
    setQuestion(questions[0])
  }, [questions])

  const questionClick = () => {
    setIsQuestion(false)
  }

  const answerClick = () => {
    if (questions.length > 0){
      questions.shift()
      setQuestion(questions[0])
      setIsQuestion(true)
    }
    if (questions.length < 1){
      setIsArray(false)
    }
    console.log(questions)
    console.log(question)
  }

  return (
    <div className='question-container'>
      {isArray ? isQuestion ?
        <div onClick={questionClick} ><h2 className='question-display'>{question?.question}</h2></div> :
        <div onClick={answerClick} ><h2 className='question-display'>{question?.answer}</h2></div> :
        <h2 className='question-display'>Congratulations, you have answered all of the questions!!!</h2> }
    </div>
  )
}

export default PlayDeck;
