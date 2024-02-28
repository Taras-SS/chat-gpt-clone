import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { ChatDoc } from '../ChatSidebar/ChatSidebar';
import ChatBoxItem from './ChatBoxItem/ChatBoxItem';

const ChatBox = () => {
    const { sessionId } = useParams();
    const [messages, setMessages] = useState<ChatDoc[]>([]); 
    const ref = useRef<HTMLDivElement>(null);
    const scrollBlock = document.querySelector('#scroll');
    
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`http://localhost:8000/api/chat-history/?clientSessionId=${sessionId}`, {
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
        
    }, [sessionId]);
    
    useEffect(() => {  
        (scrollBlock && scrollBlock?.scrollTop !== null) && (scrollBlock.scrollTop = scrollBlock.scrollHeight);
    })

    return (
        <div className="w-full flex flex-col justify-between" >
            <div id='scroll' className="flex flex-col px-5 mt-5 basis-[37rem] overflow-scroll">
                {
                    messages.map((message, index) => <ChatBoxItem key={index} message={message} />)
                }
            <div ref={ref} />
            </div>
            <div className="py-5 px-5 flex" >
                <textarea
                    
                    className=" w-10/12 bg-gray-300 px-3 mr-6 rounded-xl text-black"
                    placeholder="Type your message here..."
                />
                <button type="button" className="w-2/12 text-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
            </div>
        </div>
    )
}

export default ChatBox