import React, {useState, useRef, useEffect} from 'react';
// import './Facebook.css';

const Facebook = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const questions = [
    "Welcome to DeRoyale Lodge! May I have your full name, please?",
    "Could you provide your home address and email for our records?",
    "We'll also need a phone number to reach you during your stay.",
    "What's your nationality for legal purposes?",
    "Could you please show your government-issued ID or passport?",
    "Will you be using a credit card for incidentals during your stay?",
    "What are your check-in and check-out dates?",
    "Do you have any room preferences like smoking/non-smoking or bed type?",
    "Any additional requests or special needs during your stay?",
    "May I have your consent to store your information as per data protection laws?",
    "We are grateful!"
  ];

  const chatContainer = useRef(null);

  useEffect(() => {
    if (currentQuestion < questions.length) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: questions[currentQuestion], isUser: false }]);
      }, 1000);
    }
  }, [currentQuestion]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainer.current) {
        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
    handleResponse(message);
  };

  const handleResponse = (reply) => {
    setMessages((prevMessages) => [...prevMessages, { text: "Got it: " + reply, isUser: false }]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setAllQuestionsAnswered(true);
      setMessages((prevMessages) => [...prevMessages, { text: "Thank you for the information!", isUser: false }]);
    }
  };


  return (
    <>
      <h2 className='page-heading'>FACEBOOK</h2>

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
      </div>
    </>
  )}

export default Facebook;
