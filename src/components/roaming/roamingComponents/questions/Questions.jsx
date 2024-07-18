import { useState } from 'react';
import style from './Questions.module.scss'
import down from '../../../../shared/assets/images/roamingImg/down.svg'
import { CSSTransition } from 'react-transition-group';
import { useLoaderData } from 'react-router-dom';


export const Questions = () => {

    const data = useLoaderData();
    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    });

    const handleRoamingClick = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    const questData = data.questData;
    const questionsData = questData?.map(item => ({
        id: item.id,
        text: item.questions,
        answer: item.answer
    }));

    return (
        <section className={style.questions}>
            <div className={style.container}>
                <h3 className={style.questions__title}>Часто задаваемые вопросы</h3>
                <div className={style.questions__block}>
                    { questionsData && questionsData?.map((question) => (
                        <div key={question.id} className={style.question__block_questAnswer}>
                            <div className={style.question__block_click} onClick={() => handleRoamingClick(question.id)}>
                                <p className={style.question__click_text}>{question.text}</p>
                                <img className={style.question__click_img} src={down} alt="down" style={{ transform: isOpen[question.id] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                            </div>
                            <CSSTransition 
                                in={isOpen[question.id]}
                                timeout={250}
                                classNames={{
                                enter: style.questions__block_answer_enter,
                                enterActive: style.questions__block_answer_enter_active,
                                exit: style.questions__block_answer_exit,
                                exitActive: style.questions__block_answer_exit_active,
                            }}
                                unmountOnExit>
                                    <div className={style.questions__block_answer}>
                                        <p className={style.questions__answer_text}>{question.answer}</p>
                                    </div>
                            </CSSTransition>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}