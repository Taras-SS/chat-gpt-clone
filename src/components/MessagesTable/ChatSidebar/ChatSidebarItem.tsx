import React, { useEffect, useState } from 'react'
import { Chat } from './ChatSidebar'
import { NavLink, useOutletContext } from 'react-router-dom';
import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { UserMessageType } from '../../../pages/Admin';

type ChatSidebarItemProps = {
    chat: Chat,
    readMessageFromUserChat: (sessionId: string, isViewedByAdmin: boolean) => void;
    modiefyChats: (param: string) => void
}

const ChatSidebarItem = ({ chat, readMessageFromUserChat, modiefyChats }: ChatSidebarItemProps) => {
    const date = new Date(chat.doc.createdAt).toLocaleString() 
    const isMessageRead = chat.doc.viewedByAdmin;
    const userName = chat.doc.userName;
    const userEmail = chat.doc.clientEmail;
    const phone = chat.doc.clientPhoneNumber;    

    const onOpenChat = () => {
        modiefyChats(chat._id)
    }

    return (
        <NavLink
            to={`selectedChat/${chat._id}`} 
            className={({ isActive }) => `flex flex-row py-4 px-2 justify-center items-center border-b-2 border-t-2 cursor-pointer ${isActive && ' bg-blue-600'} hover:border-blue-600`}
            onClick={() => {readMessageFromUserChat(chat.doc?.clientSessionId, isMessageRead); onOpenChat()}}
        >
            <div className="w-full">
                <div className="text-md font-semibold">Имя: {userName || '-'}</div>
                <div className="text-md font-semibold">Email: {userEmail || '-'}</div>
                <div className="text-gray-400">Телефон: {phone || '-'}</div>
                <span className="text-gray-400">Дата: {date}</span>
                
            </div>
            <div>
                {isMessageRead ? <EnvelopeOpenIcon className='w-6 h-6' />  : <EnvelopeIcon className='w-6 h-6' /> }
                
            </div>
        </NavLink>
    )
}

export default ChatSidebarItem;