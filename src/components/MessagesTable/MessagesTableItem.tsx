import React from 'react'

type MessageItemProps = {
    unRead?: boolean
}

const MessagesTableItem = ({ unRead } :MessageItemProps) => {
    const unreadMessagesClasses = unRead ? 'bg-neutral-50 text-black font-medium dark:border-neutral-500 dark:text-neutral-800"' : '';
    
    return (
        <div>Item</div>
    )
}

export default MessagesTableItem