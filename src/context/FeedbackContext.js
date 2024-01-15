import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This Feedback is only for testing purpose 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This Feedback is only for testing purpose 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This Feedback is only for testing purpose 3',
            rating: 10
        },
    ]);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure to delete this item?')){
        setFeedback(feedback.filter((item) => item.id !== id));
        }
      }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([...feedback,newFeedback]);
    }

    const editFeedback = (item) => {
        console.log(item);
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updateItem}: item)))
    }

    return <FeedbackContext.Provider
     value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
     }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;