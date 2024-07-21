import React, { useEffect, useState } from 'react';
import styles from './styles/Droptown.module.css';
// import flag from '../../assets/icons/droptown/flag.png';
import down from '../../assets/icons/droptown/down.png';
import up from '../../assets/icons/droptown/up.png';
import { forwardRef } from 'react';

const Droptown = forwardRef(
  (
    {
      blockStyle,
      setSelected,
      droptownStyle,
      options = [],
      errors = {},
      style,
      onBlur,
      onFocus,
      selectedOption,
      flags,
      isActive,
      setIsActive,
      droptownBtnActive,
      languageMapping = {},
    },
    ref,
  ) => {
    const [selectedOptionState, setSelectedOptionState] = useState(languageMapping[selectedOption]);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
      if (options.length > 0) {
        setSelectedOptionState(languageMapping[selectedOption] || Object.keys(languageMapping)[0]);
      }
    }, [options, selectedOption, languageMapping]);

    const formatPhoneNumber = inputValue => {
      const phoneNumber = inputValue.replace(/\D/g, '');
      let formattedPhoneNumber = inputValue.startsWith('+') ? '+' : '';

      if (phoneNumber.length > 0) {
        formattedPhoneNumber += `(${phoneNumber.substring(0, 3)}`;
      }
      if (phoneNumber.length >= 4) {
        formattedPhoneNumber += `) ${phoneNumber.substring(3, 6)}`;
      }
      if (phoneNumber.length >= 7) {
        formattedPhoneNumber += ` ${phoneNumber.substring(6, 9)}`;
      }
      return formattedPhoneNumber;
    };

    const handlePhoneChange = e => {
      const formattedValue = formatPhoneNumber(e.target.value);
      setPhoneNumber(formattedValue);
    };

    const handleOptionClick = (option) => {
      setSelected(option);
      setSelectedOptionState(option);
      setIsActive(false);
    };

    return (
      <div className={`${styles.droptown_flex} ${blockStyle}`}>
        <div className={styles.droptown}>
          <div
            className={`${styles.droptown_btn} ${isActive ? droptownBtnActive : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            {selectedOptionState}
            <img src={isActive ? up : down} alt="arrow" />
          </div>
          {isActive && (
            <div className={styles.droptown_content}>
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={styles.droptown_item}
                >
                  <h3 className={styles.droptown_block_text}>
                    {languageMapping[option]}
                  </h3>
                  <img
                    className={styles.droptown_img}
                    src={flags[index]}
                    alt="flag"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`${styles.droptown_end} ${droptownStyle}`}>
          <input
            className={`${styles.droptown_end_inp} ${errors?.phone ? styles.inputError : ''} ${style}`}
            type="tel"
            placeholder="(778) 900 988"
            value={phoneNumber}
            onChange={handlePhoneChange}
            ref={ref}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </div>
      </div>
    );
  },
);

export default Droptown;