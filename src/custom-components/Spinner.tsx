import React from 'react'

const Spinner = () => {
    return (
        <div className='flex pt-2 space-x-2 justify-center items-center bg-transparent dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce'></div>
        </div>
)
}

export default Spinner