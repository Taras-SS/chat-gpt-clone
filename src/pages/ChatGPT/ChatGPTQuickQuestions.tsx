import React from 'react'

const ChatGPTQuickQuestions = ({ sendMessageForChatGPT }: { sendMessageForChatGPT: (param?: string) => void}) => {
    return (
        <div>
            <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">
                <div className="grow">
                    <div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
                        <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
                            <div className="flex flex-col gap-2 text-white">
                                <span>
                                    <button type='button' onClick={() => sendMessageForChatGPT('Как много времени может занять вывод ?')} className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal hover:bg-[#171717]">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex flex-col overflow-hidden">
                                                    <div className="truncate">Как много времени может занять вывод? </div>
                                                    {/* <div className="truncate font-normal opacity-50">описание 1...</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                                <span>
                                    <button onClick={() => sendMessageForChatGPT('Вы находитесь в Казахстане ?')} type='button' className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal hover:bg-[#171717]">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex flex-col overflow-hidden">
                                                <div className="truncate">Вы находитесь в Казахстане?</div>
                                                    {/* <div className="truncate font-normal opacity-50">описание 2...</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 text-white">
                                <span>
                                    <button type='button' onClick={() => sendMessageForChatGPT('Личная встреча возможна ?')} className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal hover:bg-[#171717]">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex flex-col overflow-hidden">
                                                <div className="truncate">Личная встреча возможна?</div>
                                                    {/* <div className="truncate font-normal opacity-50">описание 3...</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                                <span>
                                    <button type='button' onClick={() => sendMessageForChatGPT('Как мне убедиться, что компания настоящая ?')} className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal hover:bg-[#171717]">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex flex-col overflow-hidden">
                                                <div className="">Как мне убедиться, что компания настоящая?</div>
                                                    {/* <div className="truncate font-normal opacity-50">описание 4...</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatGPTQuickQuestions