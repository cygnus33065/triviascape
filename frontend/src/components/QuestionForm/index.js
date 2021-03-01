import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { createQuestion } from '../../store/question';
import './QuestionForm.css'

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [errors, setErrors] = useState([])
  const deck = useSelector(state => state.deck);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const deckId = deck.deck.id;
    dispatch(createQuestion({question, answer, deckId}))
    setQuestion('')
    setAnswer('');
  }

return (
  <div className='question-form-container'>
    <h2 className='question-header'>Enter your questions here.</h2>
    <div className='deck-form-div'>
    <form className='question-form' onSubmit={handleSubmit}>
      <label className='question-labels'>Question</label>
      <input
        type='text'
        className='question-input'
        required
        value={question}
        onChange={(e) => setQuestion(e.target.value)} />
      <label className='question-labels'>Answer</label>
      <input
        type='text'
        className='question-input'
        required
        value={answer}
        onChange={(e) => setAnswer(e.target.value)} />
      <button type='submit' className='question-button'>Add question to deck</button>
    </form>
    </div>
  </div>
)

}

export default QuestionForm;
