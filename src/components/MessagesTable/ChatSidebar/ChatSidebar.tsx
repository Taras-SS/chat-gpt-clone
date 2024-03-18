import React, { useEffect, useState } from 'react'
import ChatSidebarItem from './ChatSidebarItem'
import Spinner from '../../../custom-components/Spinner'
import { useOutletContext } from 'react-router-dom'
import { UserMessageType } from '../../../pages/Admin'

export type ChatDoc = {
    sentByAdmin: boolean
    clientSessionId: string
    createdAt: string
    message: string
    viewedByAdmin: boolean
    viewedByUser: boolean
    __v: number
    _id: string
    userName?: string,
    clientEmail?: string
    clientPhoneNumber?: string
}

export type Chat = {
    _id: string,
    doc: ChatDoc
}

type ChatSideBarProps = {
    userMessage: UserMessageType
}

const ChatSideBar = ({  userMessage }: ChatSideBarProps) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
    const loggedInUser = JSON.parse(sessionStorage.getItem('auth')!);
    
    // Get unread chats
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch('/api/chats', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const { data } = await resp.json() as { data: Chat[] };
                
                const sortedChats = sortArrayByViewedByAdmin([...data]);
                
                setChats([...sortedChats]);                
                setFilteredChats([...sortedChats]);

            } catch (e) {
                console.log(e);
            }
        })()
        
    }, [userMessage]);
    
    const readUserChat = async (sessionId: string, isViewedByAdmin: boolean) => {
        if(isViewedByAdmin) return;
        
        try {
            await fetch('/api/read-messages', {
                method: 'POST',
                body: JSON.stringify({ clientSessionId: sessionId }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": JSON.stringify(loggedInUser?.accessToken)
                }
            })

        } catch (e) {
            console.log(e);
        }
    }

    function sortArrayByViewedByAdmin(arr: Chat[]) {
        arr.sort((a, b) => {
            if (a.doc.viewedByAdmin === false && b.doc.viewedByAdmin === true) {
                return -1;
            } else if (a.doc.viewedByAdmin === true && b.doc.viewedByAdmin === false) {
                return 1;
            } else {
                return 0;
            }
        });

        return arr;
    }

    const onFilterChats = (filteringValue: string) => {
        const filtered = chats.filter((option: Chat) => {
            const filteerByDateAndTime = new Date(option.doc.createdAt).toLocaleString().toLowerCase().includes(filteringValue.toLowerCase())
            const filterByUserName = option.doc.userName?.toLowerCase().includes(filteringValue.toLowerCase())
            const filterByEmail = option.doc.clientEmail?.toLowerCase().includes(filteringValue.toLowerCase())
            const filterByPhone = option.doc.clientPhoneNumber?.toLowerCase().includes(filteringValue.toLowerCase())

            return  filteerByDateAndTime || filterByUserName || filterByEmail || filterByPhone;     
        })

        setFilteredChats(filtered);    
    }

    const modiefyChats = (openedChatId: string) => {
        
        const newChats = chats.map((item) => {
            
            if(item._id === openedChatId) {
                return {
                    ...item,
                    doc: {
                        ...item.doc,
                        viewedByAdmin: true
                    }
                }
            } else {
                    return item
                }
            }
        )
        
        setChats([...newChats]);
        setFilteredChats([...newChats]);
    }
    
    return (
        <div className="flex flex-col w-2/5 border-r-2 overflow-auto">
            <div className="border-b-2 py-4 px-2">
                <input
                    type="text"
                    placeholder="search chatting"
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    onChange={(e) => onFilterChats(e.target.value)}
                />
            </div>
            {
                filteredChats.map((chat, index) => (
                    <ChatSidebarItem
                        key={chat._id} 
                        chat={chat} 
                        readMessageFromUserChat={readUserChat} 
                        modiefyChats={modiefyChats}
                    />
                ))
            }
        </div>
    )
}

export default ChatSideBar