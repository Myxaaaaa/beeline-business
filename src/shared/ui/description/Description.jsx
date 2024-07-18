import { useState } from 'react';
import { Button } from '../customButton/Button';
import style from './Description.module.scss';

export const Description = ({ title, text, btnStyle }) => {
    const [isTextVisible, setIsTextVisible] = useState(true);

    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <section className={style.description}>
            <div className={style.container}>
                <h3 className={style.description__title} dangerouslySetInnerHTML={{ __html: title }} />
                <div className={`${style.description__text} ${isTextVisible ? style.visible : style.hidden}`}>
                    <p dangerouslySetInnerHTML={{ __html: isTextVisible ? text : "..." }} />
                </div>
                {/* {!isTextVisible && <p className={style.ellipsis}>...</p>} */}
                <Button className={`${style.description__btn} ${btnStyle}`} onCLick={toggleTextVisibility}>
                    {isTextVisible ? 'Скрыть' : 'Раскрыть'}
                </Button>
            </div>
        </section>
    );
};
