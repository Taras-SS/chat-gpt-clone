import React, { Suspense } from 'react'
import ChatSidebar from './ChatSidebar/ChatSidebar';
import { Outlet } from 'react-router-dom';
import { SocketType, UserMessageType } from '../../pages/Admin';

type MessageTableProps = {
    userMessage: UserMessageType,
    connectedAdminSocket: SocketType
}

const MessagesTable = ({ userMessage, connectedAdminSocket }: MessageTableProps) => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('auth')!);

    return (
        <div className="shadow-lg rounded-lg bg-inherit flex flex-col flex-1">
            <div className="px-10 py-5 flex justify-between items-center bg-inherit border-b-2">
                <div className="font-semibold text-2xl">Чаты с клиентами</div>
                <div className="w-1/2 flex justify-end ">
                <div>
                    <span className='mr-4'>{loggedInUser?.firstName}</span>
                    <span>{loggedInUser?.email}</span>
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-between bg-inherit block-height">
                <ChatSidebar userMessage={userMessage} />
                <Outlet context={{userMessage, connectedAdminSocket}} />
            </div>
        </div>
    )
}

export default MessagesTable