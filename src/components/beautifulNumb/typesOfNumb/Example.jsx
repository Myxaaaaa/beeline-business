import style from './styles/TypesNum.module.css';
import { useState } from 'react';
import { ArrowDown } from '../../../shared/assets/icons/internetPackagesIcons/arrowDown/ArrowDown';
import { ArrowUp } from '../../../shared/assets/icons/internetPackagesIcons/arrowUp/ArrowUp';
import { RegisterModal } from '../../tariffs/tariffsPages/registerModal/RegisterModal';
import plus from '../../../shared/assets/icons/beautifulIcons/plus.svg';

export const Example = ({ status, numbers }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [visibleParts, setVisibleParts] = useState(6);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = number => {
    if (number === selectedNumber) {
      setOpenModal(false);
    } else {
      setSelectedNumber(number);
      setOpenModal(true);
    }
  };

  const renderNumberBox = (item, isAdaptive = false) => (
    <div
      key={item.fullMsisdn}
      className={isAdaptive ? style.numberAdaptive : style.number__box}
    >
      <input
        type="radio"
        className={style.box__circle}
        checked={item.fullMsisdn === selectedNumber}
        onChange={() => setSelectedNumber(item.fullMsisdn)}
      />
      <label
        className={`${style.box__numberText} ${item.fullMsisdn === selectedNumber ? style.active : ''}`}
        onClick={() => !isAdaptive && handleOpenModal(item.fullMsisdn)}
      >
        {item.fullMsisdn}
      </label>
      {isAdaptive && (
        <img
          src={plus}
          alt="plus"
          onClick={() => handleOpenModal(item.fullMsisdn)}
        />
      )}
    </div>
  );

  return (
    <div className={style.numbers_cont}>
      <div className={style.numbers_title}>
        <h3>Номера категории &quot;{status}&quot;</h3>
      </div>
      <div className={style.numbers_data}>
        {numbers && numbers.map(item => renderNumberBox(item))}
        {numbers &&
          numbers
            .slice(0, visibleParts)
            .map(item => renderNumberBox(item, true))}

        <button
          className={`${style.btn} ${visibleParts === numbers.length && style.btn_active}`}
          onClick={() =>
            setVisibleParts(prev =>
              prev === numbers.length ? 6 : numbers.length,
            )
          }
        >
          Показать еще
          {visibleParts === numbers.length ? <ArrowDown /> : <ArrowUp />}
        </button>

        {openModal && (
          <RegisterModal
            isRegisterOpen={openModal}
            setIsRegisterModal={setOpenModal}
            selectedNumber={selectedNumber}
          />
        )}
      </div>
    </div>
  );
};
