import React, { useState, useEffect } from 'react';
import '../styles/Chatgpt.css';
import Facebook from './Facebook';
import FacebookIcon from '../images/facebook.png';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const Chatgpt = ({ reviews }) => {
    const [typing, setTyping] = useState(false);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        handleSend();
    }, [reviews]);

    const handleSend = async () => {
        if (reviews.length === 0 || currentReviewIndex >= reviews.length) {
            return;
        }

        const reviewText = reviews[currentReviewIndex].review_text;
        const username = reviews[currentReviewIndex].username;
        const updatedAtString = reviews[currentReviewIndex].updated_at;
        const updatedAt = new Date(updatedAtString);
        const formattedDate = updatedAt.toLocaleDateString();
        const formattedTime = updatedAt.toLocaleTimeString();

        const newMessage = {
            review: reviewText,
            username: username,
            time: formattedTime,
            date: formattedDate,
            sender: 'user',
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);
        setTyping(true);

        await processMessageToChatGPT(newMessages);

        setCurrentReviewIndex((prevIndex) => prevIndex + 1);
    };

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            return { role: messageObject.sender, content: messageObject.review };
        });

        const systemMessage = {
            role: 'system',
            content: 'Speak like a Hotel Manager and answer questions like you manage a multi-purpose hotel.',
        };

        const apiRequestBody = {
            model: 'gpt-3.5-turbo',
            messages: [systemMessage, ...apiMessages],
        };

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data);
                setMessages([
                    ...chatMessages,
                    {
                        response: data.choices[0].message.content,
                        sender: 'ChatGPT',
                    },
                ]);
                setTyping(false);
            });
    }

    return (
        <>
          <div className='chat-container-class'>
              <div className='chat-messages' style={{ height: '75vh', overflowY: 'scroll', padding: '10px' }}>
                  {messages.map((message, i) => (
                      <div key={i} className={`message ${message.sender === 'user' ? 'left' : 'right'}`}>
                          {message.sender === 'user' && <div className='bubble' style={{ textAlign: 'right', margin: '5px'}}>
                              <div style={{ textAlign: 'right', padding: '10px', display: 'inline-block', borderRadius: '10px', backgroundColor:  '#FDDAC1', color: '#492a13' }}>
                                  <p style={{ fontSize: '0.7rem' }}>{message.username}</p>
                                  <p style={{ fontSize: '0.9rem'}}>{message.review}</p>
                                  <div className='row align-center' style={{ justifyContent:'end' }}>
                                      <p style={{ fontSize: '0.6rem', marginTop: '-10px' }}>{message.date}</p>&nbsp;&nbsp;
                                      <p style={{ fontSize: '0.6rem', marginTop: '-10px' }}>{message.time}</p>&nbsp;&nbsp;
                                      <img src={FacebookIcon} alt='facebook icon' className='review-icon' /> 
                                  </div>
                              </div>
                          </div>}
                          
                          {message.sender === 'ChatGPT' && <div className='bubble' style={{ textAlign:'left', margin: '10px', maxWidth: '80%'}}>
                              <div style={{ fontSize: '0.9rem', padding: '15px', display: 'inline-block', borderRadius: '10px', backgroundColor: '#B0DAD9', color: '#083f3e' }}>
                                  {message.response}
                              </div>
                          </div>}
                      </div>
                  ))}
              </div>
              <div className='input-container'>
                  <button onClick={handleSend}>Next Review</button>
              </div>
            </div>
        </>
    );
};

export default Chatgpt;
