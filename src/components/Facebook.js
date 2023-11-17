import React, {useState, useEffect} from 'react';
import Chatgpt from './Chatgpt';
import FacebookIcon from '../images/facebook.png';

const Facebook = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/facebook_reviews');
        const data = await response.json();
        console.log(data)
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Facebook reviews:', error);
      }
    };
    fetchData();
  }, []);

  const getMessageData = (review) => {
    const reviewText = review.review_text;
    const username = review.username;
    const fullName = review.full_name;
    const updatedAtString = review.updated_at;
    const updatedAt = new Date(updatedAtString);
    const formattedDate = updatedAt.toLocaleDateString();
    const formattedTime = updatedAt.toLocaleTimeString();

    return {
      review: reviewText,
      username: username,
      fullname: fullName,
      time: formattedTime,
      date: formattedDate,
      sender: 'user',
    };
  };


  return (
    <>
      <h2 className='page-heading'><img src={FacebookIcon} alt='facebook icon' className='heading-icon' />&nbsp;FACEBOOK</h2>
      <Chatgpt reviews={reviews} icon={FacebookIcon} getMessageData={getMessageData} />
{/* 
      <div className='custom-chat-container'>
        <div ref={chatContainer} style={{ height: '65vh', overflowY: 'scroll', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ textAlign: message.isUser ? 'right' : 'left', margin: '5px' }}>
              <div style={{ padding: '10px', display: 'inline-block', borderRadius: '10px', backgroundColor: message.isUser ? '#FDDAC1' : '#B0DAD9', color: message.isUser ? '#492a13' : '#083f3e' }}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {currentQuestion < questions.length && !allQuestionsAnswered && (
            <input
              type="text"
              className='reply-input'
              placeholder="Type your reply..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
              style={{ width: '100%', marginTop: '10px', marginBottom: '30px', padding: '20px', backgroundColor: '#0c5e5c', color: '#ffffff'}}
            />
          )}
          {allQuestionsAnswered && <div className='reply-input' style={{ padding: '20px', marginTop: '10px', marginBottom: '30px', backgroundColor: '#0c5e5c', color: '#ffffff' }}>All questions answered. We'll be in touch!</div>}
        </div>
      </div> */}
    </>
  )}

export default Facebook;
