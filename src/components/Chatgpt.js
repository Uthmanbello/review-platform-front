import React, { useState, useEffect } from 'react';
import '../styles/Chatgpt.css';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const Chatgpt = ({ reviews, icon, getMessageData }) => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        handleSend();
    }, [reviews]);

    const handleSend = async () => {
        if (reviews.length === 0 || currentReviewIndex >= reviews.length) {
            return;
        }

        const newMessage = getMessageData(reviews[currentReviewIndex]);

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        await processMessageToChatGPT(newMessages);

        setCurrentReviewIndex((prevIndex) => prevIndex + 1);
    };

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            // return { role: 'assistant', content: messageObject.review };
            return { role: 'assistant', content: messageObject.review || '' };
          });
    //     let apiMessages = chatMessages.map((messageObject) => {
    //     let role = '';
    //     if (messageObject.sender === 'ChatGPT') {
    //       role = 'assistant'
    //     } else {
    //       role = 'user'
    //     }
    //     return { role: role, content: messageObject.review}
    // });

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
                        date: new Date(data.created * 1000).toLocaleDateString(),
                        time: new Date(data.created * 1000).toLocaleTimeString(),
                        sender: 'ChatGPT',
                    },
                ]);
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
                                  <div className='row align-center' style={{ justifyContent:'end' }}>
                                      <p style={{ fontSize: '0.6rem', fontWeight: '600'}}>{message.fullname}</p>&nbsp;&nbsp;
                                      <p style={{ fontSize: '0.6rem' }}>{message.username}</p>&nbsp;&nbsp;
                                  </div>
                                  <p style={{ fontSize: '0.9rem'}}>{message.review}</p>
                                  <div className='row align-center' style={{ justifyContent:'end' }}>
                                      <p style={{ fontSize: '0.6rem', marginTop: '-10px' }}>{message.date}</p>&nbsp;&nbsp;
                                      <p style={{ fontSize: '0.6rem', marginTop: '-10px' }}>{message.time}</p>&nbsp;&nbsp;
                                      <img src={icon} alt='icon' className='review-icon' /> 
                                  </div>
                              </div>
                          </div>}
                          
                          {message.sender === 'ChatGPT' && <div className='bubble' style={{ textAlign:'left', margin: '10px', maxWidth: '80%'}}>
                              <div style={{ fontSize: '0.9rem', padding: '15px', display: 'inline-block', borderRadius: '10px', backgroundColor: '#B0DAD9', color: '#083f3e' }}>
                              <p style={{ fontSize: '0.6rem', fontWeight: '600'}}>The Manager</p>
                                  {message.response}
                                <div className='row align-center' style={{ justifyContent: 'space-between' }}>
                                  <div className='row'>
                                    <p style={{ fontSize: '0.6rem' }}>{message.date}</p>&nbsp;&nbsp;
                                    <p style={{ fontSize: '0.6rem' }}>{message.time}</p>
                                  </div>
                                  <div className='column align-center' style={{ textAlign: 'right', justifyContent: 'end' }}>
                                      <button style={{ border: 'none', backgroundColor: 'transparent' }}><i className="fa-solid fa-pen-to-square fa-2x"></i></button>
                                      <p style={{ fontSize: '0.7rem', marginTop: '-2px' }}>EDIT</p>
                                   </div>
                                </div>
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
