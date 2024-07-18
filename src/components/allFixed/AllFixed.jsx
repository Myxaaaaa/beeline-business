import styles from './AllFixed.module.scss';
import { useState } from 'react';
import { Connection1 } from '../../shared/assets/icons/homeComponentsIcons/connection1/Connection1';
import { Connection2 } from '../../shared/assets/icons/homeComponentsIcons/connection2/Connection2';
import { FieldConnection } from '../../components/homeComponents/fieldConnection/FieldConnection';
import { Button } from '../../shared/ui/customButton/Button';

export const AllFixed = () => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isConnection1Visible, setIsConnection1Visible] = useState(true);

  const fieldOpen = () => {
    setIsFieldOpen(true);
    setIsConnection1Visible(false);
  };

  return (
    <section>
      <Button className={`${styles.connection__adaptivity} ${isFieldOpen ? styles.connection__adaptivity2 : ''} `}>
        <Connection1 />
      </Button>

      <Button className={styles.connection__one}>
        <Connection1 />
      </Button>

      {isConnection1Visible && (
        <Button className={styles.connection__two} onCLick={fieldOpen}>
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
