import React, { useState } from 'react'
import { Chat } from './ChatSidebar'
import { NavLink } from 'react-router-dom';
import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';

type ChatSidebarItemProps = {
    chat: Chat,
    readMessageFromUserChat: (sessionId: string, isViewedByAdmin: boolean) => void;
}

const ChatSidebarItem = ({ chat, readMessageFromUserChat }: ChatSidebarItemProps) => {
    const [viewMessage, setViewMessage] = useState(false);
    const date = new Date(chat.doc.createdAt).toLocaleString() 
    
    const isMessageRead = chat.doc.viewedByAdmin || viewMessage;
    
    return (
        <NavLink
            to={`selectedChat/${chat._id}`} 
            className={({ isActive }) => `flex flex-row py-4 px-2 justify-center items-center border-b-2 border-t-2 cursor-pointer ${isActive && ' bg-blue-600'} hover:border-blue-600`}
            onClick={() => {readMessageFromUserChat(chat.doc?.clientSessionId, isMessageRead); setViewMessage(true)}}
        >
            <div className="w-full">
                <div className="text-lg font-semibold">{chat.doc?.clientSessionId}</div>
                <span className="text-gray-400">{date}</span>
            </div>
            <div>
                {isMessageRead ? <EnvelopeOpenIcon className='w-6 h-6' />  : <EnvelopeIcon className='w-6 h-6' /> }
                
            </div>
        </NavLink>
    )
}

export default ChatSidebarItem;