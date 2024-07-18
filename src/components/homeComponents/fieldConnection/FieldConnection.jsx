import React, { useState } from 'react';
import styles from './FieldConnection.module.scss';
import close from '../../../shared/assets/icons/homeComponentsIcons/close.svg';
import { Button } from '../../../shared/ui/customButton/Button';

const formatPhoneNumber = (inputValue) => {
  const phoneNumber = inputValue.replace(/\D/g, '').substring(3);
  let formattedPhoneNumber = '';

  if (phoneNumber.length > 0) {
    formattedPhoneNumber += ` (${phoneNumber.substring(0, 3)}`;
  }
  if (phoneNumber.length >= 4) {
    formattedPhoneNumber += `) ${phoneNumber.substring(3, 6)}`;
  }
  if (phoneNumber.length >= 7) {
    formattedPhoneNumber += `-${phoneNumber.substring(6, 9)}`;
  }
  return formattedPhoneNumber;
};

const PhoneNumberInput = ({ value, onChange, onFocus, onBlur }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    onChange(`+996${formattedValue}`);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="+996 (___) ___-__-__"
      className={styles.phoneInput}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export const FieldConnection = ({ setIsFieldOpen, setIsConnection1Visible, hidden }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const closeField = () => {
    setIsFieldOpen(false);
    setIsConnection1Visible(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (phoneNumber === '') {
      setPhoneNumber('+996');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (phoneNumber === '+996') {
      setPhoneNumber('');
    }
  };

  return (
    <section className={`${styles.field} ${hidden}`}>
      <div className={styles.field__block}>
        <div className={styles.block__close}>
          <p>Перезвоним и ответим на вопросы</p>
          <img onClick={closeField} src={close} alt="close" />
        </div>
        <div className={styles.block__submit}>
          <PhoneNumberInput 
            value={phoneNumber} 
            onChange={setPhoneNumber} 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
          />
          <Button>Жду звонка</Button>
        </div>
        <img onClick={closeField} src={close} alt="close" />
      </div>
    </section>
  );
};
