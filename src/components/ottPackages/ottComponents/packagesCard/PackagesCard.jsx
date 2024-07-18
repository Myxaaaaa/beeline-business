import style from './PackagesCard.module.scss'
import youtube from '../../../../shared/assets/images/ottImg/youtube.svg'
import tikTok from '../../../../shared/assets/images/ottImg/tiktok.svg'
import telegram from '../../../../shared/assets/images/ottImg/telegram.svg'
import whatsapp from '../../../../shared/assets/images/ottImg/whatsapp.png'
import { PopularCard } from '../../../../shared/ui/popularCard/PopularCard'
import { useLoaderData } from 'react-router-dom'
import visualMini from '../../../../shared/assets/images/ottImg/visual-mini.svg' 

export const PackagesCard = () => {
    const data = useLoaderData();
    
    const packagesCardsData = data?.resData?.slice(1, 3).map((item, index) => {
        return {
            id: item.id,
            title: item.title,
            text: index === 0 
                ? "Выбирайте Telegram-пакет, если Вы предпочитаете коммуникацию с качественными фото- и видеофайлами."
                : "Подключите WhatsApp-пакет, если это один из главных каналов связи для Вас.",
            link: index === 0 ? "/mobile-connect/ott-packages/61" : "/mobile-connect/ott-packages/62",
            img: index === 0 ? telegram : visualMini,
        };
    });

    return (
        <section className={style.packagesCard}>
            <div className={style.container}>
                { packagesCardsData && packagesCardsData?.map(item => {
                    return (
                        <PopularCard
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            link={item.link}
                            img={item.img}
                        />
                    )
                })}
            </div>
        </section>
    )
}