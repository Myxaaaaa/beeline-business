import style from './styles/ModalTarifs.module.css';
import close from '../../../../shared/assets/images/tariffsImages/cross.png';
import { useState } from 'react';
import { RegisterModal } from '../registerModal/RegisterModal';
import { Input } from '../../../../shared/ui/customInput/Input';

export const ModalTarifs = ({ isModalOpen, setIsModalOpen }) => {
  const [isRegisterOpen, setIsRegisterModal] = useState(false);
  const [isCorporateSelected, setIsCorporateSelected] = useState(null); // null means no selection

  const closeModal = () => {
    setIsModalOpen(false);
    resetCorporateSelection();
  };

  const handleCorporateSelection = event => {
    setIsCorporateSelected(event.target.value);
    if (event.target.value === 'no') {
      openRegister();
    }
  };

  const openRegister = () => {
    setIsRegisterModal(true);
  };

  const resetCorporateSelection = () => {
    setIsCorporateSelected(null);
  };

  return (
    <>
      <div className={style.modal_back}>
        <div className={style.modal_block}>
          <div className={style.modal}>
            <img
              className={style.modal_close}
              onClick={closeModal}
              src={close}
              alt="close"
            />
            <h3 className={style.modal_title}>
              Вы уже являетесь корпоративным <br />
              клиентом сети Beeline?
            </h3>
            <div className={style.modal__choice}>
              <Input
                className={style.modal__choice_radio}
                type="radio"
                name="choice"
                id="corporateChoiceNo"
                value="no"
                checked={isCorporateSelected === 'no'}
                onChange={handleCorporateSelection}
              />
              <label
                htmlFor="corporateChoiceNo"
                className={style.modal__choice_label}
              >
                Нет, Я хочу стать корпоративным клиентом
              </label>
            </div>
            <div className={style.modal__choice}>
              <Input
                className={style.modal__choice_radio}
                type="radio"
                name="choice"
                id="corporateChoiceYes"
                value="yes"
                checked={isCorporateSelected === 'yes'}
                onChange={handleCorporateSelection}
              />
              <label
                htmlFor="corporateChoiceYes"
                className={style.modal__choice_label}
              >
                Да, Я корпоративный клиент
              </label>
            </div>
          </div>
          <div
            className={`${style.modal__corporate} ${isCorporateSelected === 'yes' ? style.modal__corporate_active : ''}`}
          >
            <p className={style.modal__corporate_text}>
              *Для подключения тарифа обратитесь к ответственному лицу вашей
              организации (куратору)
            </p>
          </div>
        </div>
      </div>
      {isRegisterOpen && (
        <RegisterModal
          isRegisterOpen={isRegisterOpen}
          setIsRegisterModal={setIsRegisterModal}
          resetCorporateSelection={resetCorporateSelection} // Pass reset function
        />
      )}
    </>
  );
};
