import React from 'react'
import { useNavigate } from 'react-router-dom';
import MessagesTable from '../components/MessagesTable/MessagesTable';

const Admin = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(sessionStorage.getItem('auth')!);

    const logOutHandler = () => {
        navigate(-1);
        sessionStorage.clear();
    }

    return (
        <div className='w-100 h-screen flex flex-col bg-w'>
            <div className='h-fit text-lg text-white flex justify-end p-6 pb-3'>
                <div onClick={logOutHandler}>
                    <span className="flex space-x-2 cursor-pointer p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center"><p>Logout</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 text-gray-300"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"></path></svg></span>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <MessagesTable />
            </div>
        </div>
    )
}

export default Admin