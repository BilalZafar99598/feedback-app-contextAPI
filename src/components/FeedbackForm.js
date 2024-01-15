import { useState, useContext, useEffect } from 'react'; 
import Card from './shared/Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setText(feedbackEdit.item.text);
            setBtnDisabled(feedbackEdit.item.btnDisabled);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit])


    const handleTextChange = (e) => {
        if(text !== '' && text.trim().length <= 10){
            setMessage('Text should be at least 10 characters');
            setBtnDisabled(true);
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length > 10){
            const newFeedback = {
                text: text,
                rating: rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
            setText('');
        }
    }

  return (
    <Card>
    <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
        <input type="text"
            autoFocus
            onChange={handleTextChange}
            value={text}
            placeholder='Write your review'/>    
        <Button
            type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div> }
    </form>
    </Card>
  )
}

export default FeedbackForm
