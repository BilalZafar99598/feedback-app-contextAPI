import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating / feedback.length;
    },0);
    console.log(average.length);
  return (
    <div className="feedback-stats">
        <h4>Reviews: {feedback.length}</h4>
        <h4>Average Rating: {feedback.length ? average.toFixed(1) : 0}</h4>
    </div>
  )
}

export default FeedbackStats
