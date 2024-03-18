import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Message } from './ChatGPT'
import Spinner from '../../custom-components/Spinner'
import CopyToClipboard from 'react-copy-to-clipboard';

type ChatGPTAnswerProps = {
    message: Message,
    regenarateResponse: () => void,
    isLastOne: boolean;
    isQuizStarted: boolean;
}

const ChatGPTAnswer = ({ message, regenarateResponse, isLastOne, isQuizStarted }: ChatGPTAnswerProps) => {
    const [completedTyping, setCompletedTyping] = useState(false);
    const [displayResponse, setDisplayResponse] = useState('');
    const [copied, setCopied] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const onCopy = useCallback(() => {
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }, [])

    useEffect(() => {        
        scrollRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }, [displayResponse.length])

    useEffect(() => {
        if (!message.isBot) return;

        setCompletedTyping(false);

        let i = 0;
        const stringResponse = message.text;

        const intervalId = setInterval(() => {
            setDisplayResponse(stringResponse?.slice(0, i));

            i++;

            if (i > stringResponse?.length) {
                clearInterval(intervalId);
                setCompletedTyping(true);
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [message]);

    return (
        <div className='flex flex-row bg-Default text-white overflow-auto' >
            <div className="w-full text-token-text-primary" data-testid="conversation-turn-9">
                <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                    <div className="flex flex-1 pt-5 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                        <div className="flex-shrink-0 flex flex-col relative items-end">
                            <div className="pt-0.5">
                                <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                    <div className="relative p-1 rounded-sm h-10 w-10 text-white flex items-center justify-center">
                                        {
                                            message.isBot
                                                ? <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2406 2406">
                                                    <path d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z" fill="#74aa9c" />
                                                    <path id="a" d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" fill="#fff" />
                                                    <use xlinkHref="#a" transform="rotate(60 1203 1203)" />
                                                    <use xlinkHref="#a" transform="rotate(120 1203 1203)" />
                                                    <use xlinkHref="#a" transform="rotate(180 1203 1203)" />
                                                    <use xlinkHref="#a" transform="rotate(240 1203 1203)" />
                                                    <use xlinkHref="#a" transform="rotate(300 1203 1203)" /></svg>
                                                : <svg className='w-6 h-6 bg-black' color='white' fill='white' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title /><g data-name="Layer 7" id="Layer_7"><path className="cls-1" d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z" /></g></svg>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn" ref={scrollRef}>
                            <div className="font-semibold select-none">{message.isBot ? 'ChatGPT' : 'You'}</div>
                            <div className="flex-col gap-1 md:gap-3">
                                <div className="flex flex-grow flex-col max-w-full" >
                                    <div data-message-author-role="assistant"  data-message-id="abbfcc13-6351-4d27-a831-6d277593c611" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                        {
                                            message.isBot
                                                ? (!displayResponse
                                                    ? (<Spinner />)
                                                    : (<div className="markdown prose w-full break-words dark:prose-invert dark">
                                                        {displayResponse}
                                                        {!completedTyping &&
                                                            <svg
                                                                viewBox="8 4 8 16"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="cursor"
                                                            >
                                                                <rect x="10" y="6" width="4" height="12" fill="#fff" />
                                                            </svg>
                                                        }
                                                    </div>)
                                                )
                                                : <div className="markdown prose w-full break-words dark:prose-invert dark">
                                                    <span>
                                                        {message.text}
                                                    </span>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 flex justify-start gap-3 empty:hidden" >
                                {
                                    message.isBot &&
                                    isLastOne &&
                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                            <span className="" data-state="closed">
                                                {
                                                    <> 
                                                    { !copied 
                                                        ?   <CopyToClipboard onCopy={onCopy} text={message.text}>
                                                                <button className="flex items-center gap-1.5 rounded-md p-1 text-xs text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </button>
                                                            </CopyToClipboard>
                                                        : <button className="flex items-center gap-1.5 rounded-md p-1 text-xs text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md"><path fillRule="evenodd" clipRule="evenodd" d="M18.0633 5.67375C18.5196 5.98487 18.6374 6.607 18.3262 7.06331L10.8262 18.0633C10.6585 18.3093 10.3898 18.4678 10.0934 18.4956C9.79688 18.5234 9.50345 18.4176 9.29289 18.2071L4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929C5.18342 11.9023 5.81658 11.9023 6.20711 12.2929L9.85368 15.9394L16.6738 5.93664C16.9849 5.48033 17.607 5.36263 18.0633 5.67375Z" fill="currentColor"></path></svg></button>
                                                    }
                                                    </>
                                                }
                                            </span>
                                            { !isQuizStarted && 
                                                <span className="" data-state="closed">
                                                    <button onClick={regenarateResponse} className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                        <div className="flex items-center gap-1.5 text-xs">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.5C5.05228 2.5 5.5 2.94772 5.5 3.5V5.07196C7.19872 3.47759 9.48483 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.1307 21.5 3.11828 17.8375 2.565 13.1164C2.50071 12.5679 2.89327 12.0711 3.4418 12.0068C3.99033 11.9425 4.48712 12.3351 4.5514 12.8836C4.98798 16.6089 8.15708 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.7796 4.5 7.7836 5.46469 6.40954 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.5C3.96064 9 3.52101 8.57299 3.50073 8.03859C3.49983 8.01771 3.49958 7.99677 3.5 7.9758V3.5C3.5 2.94772 3.94771 2.5 4.5 2.5Z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </span>}
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatGPTAnswer