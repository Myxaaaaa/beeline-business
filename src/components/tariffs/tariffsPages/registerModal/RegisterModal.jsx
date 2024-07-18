import style from './RegisterModal.module.scss';
import close from '../../../../shared/assets/images/tariffsImages/cross.png';
import { Input } from '../../../../shared/ui/customInput/Input';
import { BitApi } from '../../../../shared/api/Bitrix';
import Droptown from '../../../../shared/ui/droptown/Droptown';
import { useRef, useState } from 'react';

export const RegisterModal = ({
  setIsRegisterModal,
  productName,
  setSuccessOpen,
  setShowModal,
}) => {
  const [errors, setErrors] = useState({});
  const [focusedInputId, setFocusedInputId] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+996');
  const modalRef = useRef(null);
  const formRefs = {
    name: useRef(null),
    companyTitle: useRef(null),
    typeActivity: useRef(null),
    phone: useRef(null),
    email: useRef(null),
  };

  const closeRegister = () => setIsRegisterModal(false);

  const handleBlur = () => setFocusedInputId(null);

  const handleFocus = id => setFocusedInputId(id);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsRegisterModal(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (
      !formRefs.name.current.value ||
      formRefs.name.current.value.split(' ').length < 2
    )
      newErrors.name = 'Ваше имя и фамилия*';
    if (!formRefs.companyTitle.current.value)
      newErrors.companyTitle = 'Название организации*';
    if (
      !formRefs.phone.current.value ||
      !/^\(\d{3}\) \d{3} \d{3}$/.test(formRefs.phone.current.value)
    )
      newErrors.phone = 'Номер телефона*';
    if (
      !formRefs.email.current.value ||
      !/\S+@\S+\.\S+/.test(formRefs.email.current.value)
    )
      newErrors.email = 'Email почта*';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (validate()) {
      const leadData = {
        fields: {
          TITLE: 'Новая заявка(сайт B2B)',
          NAME: formRefs.name.current.value,
          COMPANY_TITLE: formRefs.companyTitle.current.value,
          COMMENTS: `${productName}\n\nВид деятельности: ${formRefs.typeActivity.current.value}`,
          PHONE: [
            {
              VALUE: `${selectedCountryCode} ${formRefs.phone.current.value}`,
              VALUE_TYPE: 'WORK',
            },
          ],
          EMAIL: [{ VALUE: formRefs.email.current.value, VALUE_TYPE: 'WORK' }],
        },
      };

      try {
        const response = await BitApi.postBit('crm.lead.add', leadData);
        setIsRegisterModal(false);
        setSuccessOpen(true);
        setShowModal(true);
      } catch (error) {
        setIsRegisterModal(false);
        setSuccessOpen(false);
        setShowModal(true);
      }
    }
  };

  const inputsConfigs = [
    {
      ref: formRefs.name,
      type: 'text',
      placeholder: 'ФИО',
      id: 'name',
      error: errors.name,
    },
    {
      ref: formRefs.companyTitle,
      type: 'text',
      placeholder: 'Название организации',
      id: 'companyTitle',
      error: errors.companyTitle,
    },
    {
      ref: formRefs.typeActivity,
      type: 'text',
      placeholder: 'Вид деятельности',
      id: 'typeActivity',
    },
  ];

  return (
    <section className={style.RegisterModal__back} onClick={handleClickOutside}>
      <div ref={modalRef} className={style.RegisterModal__block}>
        <img
          className={style.RegisterModal__block_close}
          onClick={closeRegister}
          src={close}
          alt="close"
        />
        <h3 className={style.RegisterModal__block_title}>
          Заполните поля и отправьте ваше обращение. Наши сотрудники скоро
          свяжутся с вами.
        </h3>
        <form
          className={style.RegisterModal__block_inputs}
          onSubmit={handleSubmit}
        >
          {inputsConfigs.map(input => (
            <div
              key={input.id}
              className={style.RegisterModal__block_input_wrapper}
            >
              {input.error && (
                <label
                  className={`${style.error} ${focusedInputId === input.id ? style.label_focused : ''}`}
                  htmlFor={input.id}
                >
                  {input.error}
                </label>
              )}
              <Input
                ref={input.ref}
                type={input.type}
                placeholder={
                  focusedInputId === input.id ? '' : input.placeholder
                }
                className={`${style.RegisterModal__block_input} ${input.error ? style.input_error : ''} ${focusedInputId === input.id ? style.input_focused : ''}`}
                onBlur={() => handleBlur(input.id)}
                onFocus={() => handleFocus(input.id)}
                id={input.id}
              />
            </div>
          ))}
          <div className={style.RegisterModal__block_input_wrapper}>
            {errors.phone && (
              <label className={style.error} htmlFor="phone">
                {errors.phone}
              </label>
            )}
            <Droptown
              options={['+996', '+7']}
              setSelected={option => {
                setSelectedCountryCode(option);
              }}
              ref={formRefs.phone}
              errors={errors}
              style={`${errors.phone ? style.input_error : ''} ${focusedInputId === 'phone' ? style.input_focused : ''}`}
              onBlur={() => handleBlur('phone')}
              onFocus={() => handleFocus('phone')}
            />
          </div>
          <div className={style.RegisterModal__block_input_wrapper}>
            {errors.email && (
              <label className={style.error} htmlFor="email">
                {errors.email}
              </label>
            )}
            <Input
              ref={formRefs.email}
              type="email"
              placeholder="user@beeline.kg"
              className={`${style.RegisterModal__block_input} ${errors.email ? style.input_error : ''} ${focusedInputId === 'email' ? style.input_focused : ''}`}
              onBlur={() => handleBlur('email')}
              onFocus={() => handleFocus('email')}
              id="email"
            />
          </div>
          <button type="submit" className={style.RegisterModal__block_btn}>
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};
