import React, { SyntheticEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom';


// question, answer

const quizItems = [
    {
        question: 'Какова сумма ваших финансовых потерь?',
        answers: ['Менее $1000', '$1000 - $5000', '$5000 - $10,000', 'Более $10,000']
    }, {
        question: 'Как вы узнали о потере средств?',
        answers: ['После проведения финансовой операции', 'После получения подозрительного уведомления', 'При проверке финансового отчета', 'Другой способ']
    }, {
        question: 'Обращались ли вы в юридические компании по этому вопросу?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Официально ли вы трудоустроены в данный момент?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Предпринимались ли какие-либо попытки связаться с обвиняемой стороной или службой поддержки?',
        answers: ['Да, обращался(ась) в службу поддержки', 'Нет, не предпринимал(а) попыток связи']
    }, {
        question: 'Имеются ли у вас инвестиции, которые подверглись риску?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Пытались ли вы разрешить ситуацию самостоятельно до обращения к нам?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Обращались ли вы за помощью к другим экспертам в данной области?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Как вы узнали о нашей компании и почему выбрали нас для решения вашей проблемы?',
        answers: ['Рекомендация', 'Реклама', 'Интернет-поиск', 'Другой источник']
    }
]

const Quiz = ({ handleSubmitQuiz }: { handleSubmitQuiz: () => void }) => {
    const [searchParams] = useSearchParams();

    const [answers, setAnswers] = useState<{ [key: string]: string }[]>([]);

    const handleAnswerChange = (index: number, answer: string, question: string) => {
        const newAnswers = [...answers] as { [key: string]: string }[];
        newAnswers[index] = {
            question,
            answer
        };
        setAnswers(newAnswers);
    };

    const sendQuizAnswers = async (question: string, answer: string) => {
        try {
            await fetch('http://localhost:8000/api/ask-question', {
                method: 'POST',
                body: JSON.stringify({ 
                    question: question, 
                    answer: answer, 
                    clientSessionId: localStorage.getItem("sessionId"),
                    userName: searchParams.get('userName') , 
                    clientEmail: searchParams.get('clientEmail'), 
                    clientPhoneNumber: searchParams.get('clientPhoneNumber') 
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(e) {
            console.warn(e);
        }
    } 

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const filledAnswers = answers.filter(el => el); 
        
        if(filledAnswers.length) {
            for await(const answer of filledAnswers) {
                await sendQuizAnswers(answer?.question, answer?.answer)
            }
        }

        handleSubmitQuiz();
    };

    return (
        <div className='flex flex-row bg-Default text-white overflow-auto'>
            <div className="w-full text-token-text-primary" data-testid="conversation-turn-9">
                <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                    <div className="flex flex-1 pt-5 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                        <div className="flex-shrink-0 flex flex-col relative items-end">
                            <div className="pt-0.5">
                                <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                    <div className="relative p-1 rounded-sm h-10 w-10 text-white flex items-center justify-center">
                                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2406 2406">
                                            <path d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z" fill="#74aa9c" />
                                            <path id="a" d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" fill="#fff" />
                                            <use xlinkHref="#a" transform="rotate(60 1203 1203)" />
                                            <use xlinkHref="#a" transform="rotate(120 1203 1203)" />
                                            <use xlinkHref="#a" transform="rotate(180 1203 1203)" />
                                            <use xlinkHref="#a" transform="rotate(240 1203 1203)" />
                                            <use xlinkHref="#a" transform="rotate(300 1203 1203)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-1 w-full flex-col items-center'>
                            <div className=' text-white'>
                                <span className='font-semibold'>
                                    ChatGPT
                                </span>
                                {quizItems.map((item, index) => (
                                    <div key={index} className=' text-white pt-5 first-of-type:pt-0'>
                                        <p className='my-1 '>{item.question}</p>
                                        {item.answers.map((answer, answerIndex) => (
                                            <div className='my-1' key={answerIndex}>
                                                <input
                                                    className='cursor-pointer'
                                                    type="radio"
                                                    id={`answer-${index}-${answerIndex}`}
                                                    name={`answer-${index}`}
                                                    value={answer}
                                                    onChange={() => handleAnswerChange(index, answer, item.question)}
                                                    checked={answers[index]?.answer === answer}
                                                />
                                                <label className='px-2 cursor-pointer' htmlFor={`answer-${index}-${answerIndex}`}>{answer}</label>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <div className='w-full flex justify-center'>
                                    <button
                                        className='text-white disabled:cursor-not-allowed disabled:bg-black mt-7 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-m px-14 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'
                                        onClick={handleSubmit}
                                        disabled={!(answers.length === quizItems.length)}
                                    >
                                        Отправить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;