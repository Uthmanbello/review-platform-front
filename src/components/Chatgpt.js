import React from 'react';
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '../styles/Chatgpt.css';

const API_KEY = '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';

const Chatgpt = () => {
    const [typing, setTyping] = useState(false)

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am the Manager. How can I help you?",
            sender: "ChatGPT"
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        setTyping(true);

        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if(messageObject.sender === 'ChatGPT') {
                role = 'assistant'
            }else{
                role = 'user'
            }
            return { role: role, content: messageObject.message}
        });

        const systemMessage = {
            role: 'system',
            content: 'Speak like a Hotel Manager and answer questions like you manage a multi-puporse hotel.'
        }

        const apiRequestBody = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
            );
            setTyping(false);
        });
    }
  return (
    <>
      <div className='chat-container-class'>
        <MainContainer style={{ backgroundColor: 'transparent', border: 'none' }}>
            <ChatContainer style={{ backgroundColor: 'transparent' }}>
                <MessageList
                    style={{ backgroundColor: 'transparent', color: 'green' }}
                    scrollBehavior='smooth'
                    typingIndicator={typing ? <TypingIndicator className='typing-indicator' content='Typing...' /> : null }>
                    {messages.map((message, i) => {
                        return <Message key={i} model={message} />
                    })}
                </MessageList>
                <MessageInput
                    style={{ width: '100%', marginTop: '30px', padding: '10px', backgroundColor: '#0c5e5c', color: '#ffffff'}}
                    placeholder='Type message here' 
                    onSend={handleSend} />
            </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default Chatgpt;