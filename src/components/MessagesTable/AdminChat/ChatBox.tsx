import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { ChatDoc } from '../ChatSidebar/ChatSidebar';
import ChatBoxItem from './ChatBoxItem/ChatBoxItem';
import { SocketType, UserMessageType } from '../../../pages/Admin';

const ChatBox = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<ChatDoc[]>([]); 
    const [messageInput, setMessageInput] = useState('');
    const { sessionId } = useParams();
    const outletContext = useOutletContext() as { userMessage: UserMessageType, connectedAdminSocket: SocketType };
    const ref = useRef<HTMLDivElement>(null);
    const adminSessionId = localStorage.getItem('sessionId')!;
    
    const scrollBlock = document.querySelector('#scroll');

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`/api/chat-history/?clientSessionId=${sessionId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const { data } = await resp.json() as { data: ChatDoc[] }
                
                if(data.length > 100) {
                    const last100 = data.slice(-100);
                    setMessages(last100);
                    return;
                }
                
                setMessages(data);
    
            } catch (e) {
                console.log(e);
            }

        })();
        
    }, [sessionId, outletContext?.userMessage]);
    
    useEffect(() => {  
        (scrollBlock && scrollBlock?.scrollTop !== null) && (scrollBlock.scrollTop = scrollBlock.scrollHeight);
    })
    
    const sendMessageToUser = async () => {
        try {
            const resp = await fetch('/api/respond-to-user', {
                method: 'POST',
                body: JSON.stringify({ clientSessionId: sessionId, answer: JSON.stringify([{"index":0,"message":{"role":"assistant","content": messageInput },"logprobs":null,"finish_reason":"stop"}]) }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(resp.ok) {
                setMessages([
                    ...messages,
                    {
                        clientSessionId: sessionId!,
                        createdAt: new Date().toString(),
                        message: JSON.stringify([{"index":0,"message":{"role":"assistant","content": messageInput },"logprobs":null,"finish_reason":"stop"}]),
                        viewedByAdmin: true,
                        viewedByUser: false,
                        sentByAdmin: true,
                        __v: 0,
                        _id: adminSessionId!,
                    }
                ])
            }

            setMessageInput('');

        } catch (e) {
            console.log(e);
        }
    }

    const handleEnterClick = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if ((!messageInput.trim().length) && event.key === 'Enter') {
            event.preventDefault();
            return;
        }

        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessageToUser();
            return;
        }
    }

    const exitLiveChat = () => {        
        outletContext.connectedAdminSocket.emit('connect-with-gpt', {
            sessionId: sessionId
        })
        
        navigate('/admin')
    }
    
    return (
        <div className="w-full flex flex-col justify-between" >
            <div id='scroll' className="flex flex-col px-5 mt-5 overflow-auto">
                {
                    messages.map((message, index) => <ChatBoxItem key={index} message={message} />)
                }
            <div ref={ref} />
            </div>
            <div className="py-5 px-2 flex" >
                <textarea
                    onKeyDown={handleEnterClick}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className=" w-10/12 bg-gray-300 px-3 mr-2 rounded-xl text-black"
                    placeholder="Type your message here..."
                />
                <button onClick={sendMessageToUser} type="button" className="w-2/12 text-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Отправить</button>
                <button onClick={exitLiveChat} type="button" className="w-2/12 ml-2 text-sm text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Покинуть чат</button>
            </div>
        </div>
    )
}

export default ChatBox