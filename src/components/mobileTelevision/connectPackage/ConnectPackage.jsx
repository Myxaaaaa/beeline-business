import styles from './ConnectPackage.module.css';
import { ConnectPackage as InternetPackage } from '../../../shared/ui/connectPackage/ConnectPackage';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import { RegisterModal } from '../../tariffs/tariffsPages/registerModal/RegisterModal';

const ConnectPackageHead = ({ data }) => {
  const [dataModalOpen, setDataModalOpen] = useState(false)
  const handleOpenDataModal = () => setDataModalOpen(true)
  const internetPackages = [
    {
      title: 'Стандартный пакет: 130 каналов',
      text: 'Почувствуйте преимущества комфортного просмотра информационных, спортивных, музыкальных и других каналов. Начните смотреть видео на мобильном телефоне и продолжите на планшете или ТВ.',
    },
    {
      title: 'Базовый пакет: 50 каналов',
      text: 'Просмотрите презентацию услуги "Укмуш TV" за 48 секунд.',
    },
  ];

  return (
    <div className={styles.internetPackages}>
      <InternetPackage
        handleOpenModal={handleOpenDataModal} 
        title="Как активировать пакет Beeline TV?"
        packages={data}
        boxWidth={408}
        titles={internetPackages}
      />
      {dataModalOpen && (
        <RegisterModal setIsRegisterModal={setDataModalOpen} />
      )}
    </div>
  );
};

export default ConnectPackageHead;
