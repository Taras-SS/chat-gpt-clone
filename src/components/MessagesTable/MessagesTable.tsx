import React from 'react'
import MessagesTableItem from './MessagesTableItem'

const MessagesTable = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('auth')!);


    return (
        <div className="mx-auto shadow-lg rounded-lg bg-inherit flex flex-col flex-1">
            <div className="px-10 py-5 flex justify-between items-center bg-inherit border-b-2">
                <div className="font-semibold text-2xl">Manager chat</div>
                <div className="w-1/2 flex justify-end ">
                <div>
                    <span className='mr-4'>
                        {
                            loggedInUser?.firstName
                        }
                    </span>
                    <span>
                        {
                            loggedInUser?.email
                        }
                    </span>
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-between bg-inherit flex-1">
                <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                    <div className="border-b-2 py-4 px-2">
                        <input
                            type="text"
                            placeholder="search chatting"
                            className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                        />  
                    </div>
                    <div
                        className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
                    >
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Luis1994</div>
                            <span className="text-gray-500">Pick me at 9:00 Am</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/otT2199XwI8/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Everest Trip 2021</div>
                            <span className="text-gray-500">Hi Sam, Welcome</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                    >
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">MERN Stack</div>
                            <span className="text-gray-500">Lusi : Thanks Everyone</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>

                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>

                </div>

                <div className="w-full px-5 flex flex-col justify-between">
                    <div className="flex flex-col mt-5">
                        <div className="flex justify-end mb-4">
                            <div
                                className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                bla bla
                            </div>
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-start mb-4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
                            <div
                                className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                at praesentium, aut ullam delectus odio error sit rem. Architecto
                                nulla doloribus laborum illo rem enim dolor odio saepe,
                                consequatur quas?
                            </div>
                        </div>
                        <div className="flex justify-end mb-4">
                            <div>
                                <div
                                    className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                >
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Magnam, repudiandae.
                                </div>

                                <div
                                    className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Debitis, reiciendis!
                                </div>
                            </div>
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-start mb-4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
                            <div
                                className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                            >
                                happy holiday guys!
                            </div>
                        </div>
                    </div>
                    <div className="py-5 flex">
                        <textarea
                            className=" w-10/12 bg-gray-300 px-3 mr-6 rounded-xl text-black"
                            placeholder="Type your message here..."
                        />
                        <button type="button" className="w-2/12 text-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesTable