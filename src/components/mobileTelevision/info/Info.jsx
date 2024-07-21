import { DropInfo } from '../../../shared/ui/dropInfo/DropInfo';
import { useState } from 'react';
import styles from './styles/Info.module.css';

export const Info = ({ data }) => {
  const [isOpenDetailed, setIsOpenDetailed] = useState(false);

  const toggleDetailed = () => setIsOpenDetailed(prev => !prev);

  return (
    <section className={styles.detailedText}>
      {data
        .filter(item => item.id == 66)
        .map(item => (
          <DropInfo
            key={item.id}
            title="Подробнее об “Укмуш TV”"
            text={item.full_description}
            isOpen={isOpenDetailed}
            toggleOpen={toggleDetailed}
          />
        ))}
    </section>
  );
};
