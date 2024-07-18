import styles from './styles/Info.module.css';
import { useState } from 'react';
import { DropInfo } from '../../../shared/ui/dropInfo/DropInfo';

export const Info = ({item}) => {
  const [isOpenDetailed, setIsOpenDetailed] = useState(false);

  const toggleDetailed = () => setIsOpenDetailed(prev => !prev);

  const text = item.add_description;

  return (
    <section className={styles.detailedText}>
      <DropInfo
        title="Доп. информация об услуге “Раздавайте интернет”"
        text={text}
        isOpen={isOpenDetailed}
        toggleOpen={toggleDetailed}
        active={styles.active}
      />
    </section>
  );
};
