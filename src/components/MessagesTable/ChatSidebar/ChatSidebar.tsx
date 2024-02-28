import React, { useEffect, useState } from 'react'
import ChatSidebarItem from './ChatSidebarItem'
import Spinner from '../../../custom-components/Spinner'

export type ChatDoc = {
    clientSessionId: string
    createdAt: string
    message: string
    viewedByAdmin: boolean
    viewedByUser: boolean
    __v: number
    _id: string
}

export type Chat = {
    _id: string,
    doc: ChatDoc
}

const ChatSideBar = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
    const loggedInUser = JSON.parse(sessionStorage.getItem('auth')!);

    // Get unread chats
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch('http://localhost:8000/api/chats', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const { data } = await resp.json() as { data: Chat[] };
                const sortedChats = sortArrayByViewedByAdmin(data);
                setChats(sortedChats);
                setFilteredChats(sortedChats);

            } catch (e) {
                console.log(e);
            }
        })()
    }, []);

    const readUserChat = async (sessionId: string, isViewedByAdmin: boolean) => {
        if (isViewedByAdmin) return;

        try {
            await fetch('http://localhost:8000/api/read-messages', {
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
            const filterBySessionId = option.doc.clientSessionId.toLowerCase().includes(filteringValue.toLowerCase())
            return  filteerByDateAndTime || filterBySessionId;     
        })

        setFilteredChats(filtered);    
    }
    
    return (
        <div className="flex flex-col w-2/5 max-h-[100%] h-[43rem] overflow-scroll border-r-2">
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
                        key={index} 
                        chat={chat} 
                        readMessageFromUserChat={readUserChat} 
                    />
                ))
            }
        </div>
    )
}

export default ChatSideBar