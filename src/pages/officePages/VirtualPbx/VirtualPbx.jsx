import styles from './VirtualPbx.module.scss'
import { Banner } from "../../../shared/ui/banner/Banner"
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import { Description } from '../../../shared/ui/description/Description'
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide'
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard'
import { StatusNumber } from '../../../shared/ui/statusNumber/StatusNumber'
import { RelatedServices, RelatedServicesAdaptive } from '../../../shared/ui/relatedServices/RelatedServices'
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles'
import relatedImg from '../../../shared/assets/images/allVisual/software.png';
import { useLoaderData } from 'react-router-dom'
import { DataModal } from '../../../shared/ui/dataModal/DataModal'
import { useState } from 'react'

export const VirtualPbx = () => {
  const data = useLoaderData();
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/office-communication',
      breadcrumb: 'Офисная связь',
    },
    {
      pathname: '/office-communication/virtual-pbx-international-connection',
      breadcrumb: 'Виртуальная АТС',
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);

  const relatedServicesData = [
    { title: "Услуги Колл центра", link: "/office-communication/call-center-services-equipment", text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg },
    { title: "SIP Телефония", link: "/office-communication/sip-office-telephony-roaming", text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg },
    { title: "Короткий номер", link: "/office-communication/short-number", text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg }
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.virtualPbx}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner[0] && (
        <Banner 
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          stylesText={styles.banner__text}
          alt='Group'
          detailStyles={styles.virtualPbx__detail}
          handleClickModal={handleOpenModal}
        />
      )}
      
      {data?.data[0] && (
        <Description 
          title={data.data[0].question_title}
          text={data.data[0].question_description}
        />
      )}

      <ShortNumberSlide number='44.7' data={data?.data[0]} title={data?.data[0].bigdataminicard_question} />

      <div className={styles.necessaryCard}>
        <h2>{data?.data[0].advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data[0]?.advantages && data?.data[0]?.advantages?.map(item => (
            <NecessaryCard key={item.id}  text={item.title} img={item.emoji}/>
          ))}
        </div>
      </div>

      <StatusNumber 
        title='Виртуальная АТС для Эффективных Продаж!'
        text='Подключите Виртуальную АТС - это инструмент контроля, который повысит эффективность продаж.'
        btnText='Подключить'
        btnStyles={styles.statusNumber__btn}
        section={styles.statusNumber__section}
      />

      <RelatedServices section={styles.relatedServices__section} items={relatedServicesData} />

      <RelatedServicesAdaptive />

      <UsefulArticles />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </section>
  )
}