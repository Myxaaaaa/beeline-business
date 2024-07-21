import React, { useState } from 'react';
import styles from './styles/Droptown.module.css';
import flag from '../../assets/icons/droptown/flag.png';
import down from '../../assets/icons/droptown/down.png';
import up from '../../assets/icons/droptown/up.png';

const Droptown = ({
  blockStyle,
  setSelected,
  droptownStyle,
  options,
  register,
  errors,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = inputValue => {
    // Remove all non-digit characters
    const phoneNumber = inputValue.replace(/\D/g, '');

    // Check if inputValue starts with a plus sign, indicating an international number
    let formattedPhoneNumber = '';
    if (inputValue.startsWith('+')) {
      formattedPhoneNumber = '+';
    }

    // Apply formatting: (XXX) XXX-XXXX or (XXX) XXX XXXX
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

  return (
    <div className={`${styles.droptown_flex} ${blockStyle}`}>
      <div className={styles.droptown}>
        <div
          className={`${styles.droptown_btn} ${isActive ? styles.droptown_btn_active : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          {selectedOption}
          {isActive ? (
            <img src={down} alt="arrow" />
          ) : (
            <img src={up} alt="arrow" />
          )}
        </div>
        {isActive && (
          <div
            className={`${styles.droptown_content} ${isActive ? styles.droptown_content_active : ''}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setSelected(option);
                  setIsActive(false);
                }}
                className={styles.droptown_item}
              >
                <div className={styles.droptown_block}>
                  <h3 className={styles.droptown_block_text}>{option}</h3>
                  <div>
                    <img
                      className={styles.droptown_img}
                      src={flag}
                      alt="flag"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`${styles.droptown_end} ${droptownStyle}`}>
        <input
          className={`${styles.droptown_end_inp} ${errors.phone ? styles.inputError : ''}`}
          type="tel"
          placeholder="(778) 900 988"
          value={phoneNumber} // Use local state for value
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default Droptown;
