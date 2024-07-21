import styles from './AllFixed.module.scss';
import { useState, useEffect } from 'react';
import { Connection1 } from '../../shared/assets/icons/homeComponentsIcons/connection1/Connection1';
import { Connection2 } from '../../shared/assets/icons/homeComponentsIcons/connection2/Connection2';
import { FieldConnection } from '../../components/homeComponents/fieldConnection/FieldConnection';
import { Button } from '../../shared/ui/customButton/Button';
import { useLocation } from 'react-router-dom';

export const AllFixed = () => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isConnection1Visible, setIsConnection1Visible] = useState(true);
  const [isConnection2Visible, setIsConnection2Visible] = useState(true);
  const location = useLocation();

  const fieldOpen = () => {
    setIsFieldOpen(true);
    setIsConnection1Visible(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isAtBottom = scrollTop + windowHeight >= documentHeight - 10; 

    setIsConnection1Visible(!isAtBottom);
    setIsConnection2Visible(!isAtBottom);
  };

  useEffect(() => {
    setIsFieldOpen(false);
    setIsConnection1Visible(true);
    setIsConnection2Visible(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <section>
      {isConnection1Visible && (
        <Button className={`${styles.connection__adaptivity} ${isFieldOpen ? styles.connection__adaptivity2 : ''}`}>
          <Connection1 />
        </Button>
      )}

      {isConnection1Visible && (
        <Button className={styles.connection__one}>
          <Connection1 />
        </Button>
      )}

      {isConnection2Visible && (
        <Button className={styles.connection__two} onClick={fieldOpen}>
          <Connection2 />
        </Button>
      )}

      {isFieldOpen && (
        <FieldConnection
          setIsFieldOpen={setIsFieldOpen}
          setIsConnection1Visible={setIsConnection1Visible}
        />
      )}
    </section>
  );
};
