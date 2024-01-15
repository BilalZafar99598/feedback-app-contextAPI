import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLinkIcon from './components/AboutLinkIcon';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([...feedback,newFeedback]);
  // }
  return (
    <FeedbackProvider>
      <Router>
        <Header title="Feedback UI" bgColor="rgba(0,0,0,0.4)" color="#ff6a95"/>
          <Routes>
            <Route path='/' element={
                <>
                  <div className="container">
                      <FeedbackForm/>
                      <FeedbackStats/>
                      <FeedbackList/>
                      <AboutLinkIcon/>
                  </div>                
                </>
            }/>
            <Route path='/about' element={<About/>}/>
          </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App