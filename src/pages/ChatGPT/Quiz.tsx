import React from 'react'


// question, answer

const quizItems = [
    {
        question: 'Какова сумма ваших финансовых потерь?',
        answers: ['Менее $1000', '$1000 - $5000', '$5000 - $10,000', 'Более $10,000']
    },
    {
        queston: 'Как вы узнали о потере средств?',
        answers: ['После проведения финансовой операции', 'После получения подозрительного уведомления', 'При проверке финансового отчета', 'Другой способ']
    },
    {
        question: 'Обращались ли вы в другие юридические компании по этому вопросу?',
        answers: ['Да', 'Нет'],
    },
    {
        question: 'Официально ли вы трудоустроены в данный момент?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Имеете ли кредиты или задолженности перед банками?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Были ли у вас ранее финансовые потери в результате мошенничества в интернете?',
        answers: ['Да', 'Нет']
    }, {
        question: 'Предпринимались ли какие-либо попытки связаться с пострадавшей стороной или службой поддержки?',
        answers: ['Да, обращался(ась) в службу поддержки', 'Нет, не предпринимал(а) попыток связи']
    }, {
        question: 'Имеются ли кредиты, которые были отданы мошенникам?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Какие меры безопасности вы готовы принять в будущем для предотвращения подобных инцидентов?',
        answers: ['Регулярно обновлять программы и антивирус', 'Повысить осведомленность о методах мошенничества', 'Избегать сделок с непроверенными источниками', 'Другие меры']
    }, {
        question: 'Имеются ли у вас инвестиции, которые подверглись риску?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Как вы оцениваете свой уровень осведомленности в области интернет-безопасности?',
        answers: ['Высокий', 'Cредний', 'Низкий']
    }, {
        question: 'Пытались ли вы разрешить ситуацию самостоятельно до обращения к нам?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Каков ваш опыт в онлайн-покупках?',
        answers: ['Регулярные', 'Иногда', 'Первый раз']
    }, {
        question: 'Обращались ли вы к специалистам в сфере финансов за консультацией?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Были ли у вас случаи использования сторонних платежных систем?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Каковы ваши ожидания от нашей компании?',
        answers: ['Возврат средств', 'Консультации по безопасности', 'Защита от будущих мошенничеств', 'Другие ожидания']
    }, {
        question: 'Обращались ли вы за помощью к другим экспертам в данной области?',
        answers: ['Да', 'Нет'],
    }, {
        question: 'Как вы узнали о нашей компании и почему выбрали нас для решения вашей проблемы?',
        answers: ['Рекомендация', 'Реклама', 'Интернет-поиск', 'Другой источник']
    }
]

const Quiz = () => {
    return (
        <div className='flex flex-1 px-8 w-full flex-col items-center'>
            <div className=' text-white w-20% '>
                {
                    quizItems.map((item) => {
                        return (
                            <>
                                <div>
                                    {item.queston}
                                </div>
                                <>
                                    {
                                        item.answers.map((answer) => {
                                            return (
                                                <div>
                                                    <input type="radio" id="q1a" name="q1"
                                                        value="a" className="mr-2" required />
                                                    <label htmlFor="q1a">
                                                        {answer}
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Quiz;