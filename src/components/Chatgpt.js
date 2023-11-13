import React from 'react';
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = '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';

const Chatgpt = () => {
    const [typing, setTyping] = useState(false)

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Me",
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
      <div style={{ position: 'relative', height: '70vh', width: '50vw' }}>
        <MainContainer>
            <ChatContainer>
                <MessageList
                    scrollBehavior='smooth'
                    typingIndicator={typing ? <TypingIndicator content='My Review partner is typing' /> : null }>
                    {messages.map((message, i) => {
                        return <Message key={i} model={message} />
                    })}
                </MessageList>
                <MessageInput placeholder='Type message here' onSend={handleSend} />
            </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default Chatgpt;