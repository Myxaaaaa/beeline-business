import { useState, useEffect, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import style from './styles/BeautifulNumb.module.css';
import bannerImg from '../../shared/assets/images/beautifulNumber/bannerImg.png';
import { UsefulArticles } from './usefulArticles/UsefulArticles';
import { Input } from '../../shared/ui/customInput/Input';
import { Banner } from '../../shared/ui/banner/Banner';
import { RegisterModal } from '../tariffs/tariffsPages/registerModal/RegisterModal';
import { Preloader } from '../preloader/Preloader';
import { RegisterData } from '../../shared/ui/registerData/RegisterData';
import { GoldNumber, PremiumNumber, VipNumber } from './typesOfNumb/Numbers';

export const BeautifulNumb = () => {
  const data = useLoaderData();
  const uniquePrefixes = Array.from(
    new Set(data?.number?.map(prefix => prefix.prefix)),
  );

  const [isRegisterOpen, setIsRegisterModal] = useState(false);
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [numberParts, setNumberParts] = useState(
    Array.from({ length: 6 }, () => ''),
  );
  const [isFocused, setIsFocused] = useState(false);
  const [showData, setShowData] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [valueAdaptive, setValueAdaptive] = useState('');
  const [numbersData, setNumbersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [defaultNumbers, setDefaultNumbers] = useState([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    const fetchDefaultNumbers = async () => {
      try {
        const response = await axios.get(
          'https://beeline.pp.ua/api/v1/numbers',
        );
        setDefaultNumbers(response.data);
      } catch (error) {
        console.error('Error fetching default numbers:', error);
      }
    };
    fetchDefaultNumbers();
  }, []);

  const handleDropdownChange = value => {
    setSelectedPrefix(value);
  };

  const handleInputChange = (index, value) => {
    if (/^\d{0,1}$/.test(value)) {
      const newNumberParts = [...numberParts];
      newNumberParts[index] = value;
      setNumberParts(newNumberParts);
    }
  };

  const handleInputAdaptive = e => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (inputValue.length <= 6) {
      setValueAdaptive(inputValue);
    }
  };

  const formatInput = input => {
    let formattedInput = input.replace(/\D/g, '');
    formattedInput = formattedInput.slice(0, 6);

    if (formattedInput.length > 3) {
      formattedInput =
        formattedInput.slice(0, 3) + '-' + formattedInput.slice(3);
    }

    formattedInput = formattedInput.split('').join('   ');

    return formattedInput;
  };

  const handleKeyDown = (event, partIndex) => {
    if (
      event.key === 'Backspace' &&
      event.target.value === '' &&
      partIndex > 0
    ) {
      inputRefs.current[partIndex - 1].focus();
    } else if (
      event.key !== 'Backspace' &&
      event.target.value.length === 1 &&
      partIndex < numberParts.length - 1
    ) {
      inputRefs.current[partIndex + 1].focus();
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSubmit = async event => {
    event.preventDefault();
    const fullNumber = selectedPrefix + numberParts.join('');
    setLoading(true);
    try {
      const response = await axios.get(
        `https://beeline.pp.ua/api/v1/numbers?q=${fullNumber}`,
      );
      setNumbersData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const filterAndLimitNumbers = type => {
    const filteredNumbers = (numbersData || defaultNumbers).filter(
      number => number.msisdnType === type,
    );
    return filteredNumbers.slice(0, 9);
  };

  const goldNumbers = filterAndLimitNumbers('Золото+');
  const premiumNumbers = filterAndLimitNumbers('Платина');
  const vipNumbers = filterAndLimitNumbers('VIP');

  const hasNumbers =
    numberParts.some(part => part !== '') || valueAdaptive !== '';

  return (
    <section className={style.wrapper}>
      <div className={style.banner}>
        <Banner
          title="Мобильные номера"
          text="Выбирайте эксклюзивный номер из премиум-категорий."
          img={bannerImg}
          alt="banner"
          detail="Подробнее"
          plugStyles={style.plugStyles}
        />
      </div>
      <div className={style.filter_wrapper}>
        <h2>Выберите лучший номер первым</h2>
        <form className={style.filter_cont} onSubmit={handleSubmit}>
          <div className={style.chooseNumber}>
            <h3>Введите желаемую комбинацию от 3 до 6 цифр</h3>
            <div className={style.chooseNumber__items}>
              <select
                className={style.select_cont}
                value={selectedPrefix}
                onChange={e => handleDropdownChange(e.target.value)}
              >
                <option value="" disabled hidden>
                  Все коды
                </option>
                {uniquePrefixes.map(prefix => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
              <div className={style.input_cont}>
                {numberParts.map((part, index) => (
                  <input
                    key={index}
                    type="text"
                    value={part}
                    onChange={e => handleInputChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    ref={el => (inputRefs.current[index] = el)}
                    placeholder="X"
                    required={index === 0 && !valueAdaptive}
                  />
                ))}
              </div>
              <input
                type="text"
                className={style.cont__inputAdaptive}
                placeholder={isFocused ? '' : 'XXX-XXX'}
                value={formatInput(valueAdaptive)}
                onChange={handleInputAdaptive}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={25}
                required={!numberParts.some(part => part !== '')}
                name="inputAdaptive"
              />
            </div>
          </div>
          <button
            type="submit"
            className={style.filter_button}
            disabled={!hasNumbers}
          >
            Подобрать номер
          </button>
          <button
            type="submit"
            className={style.filter__buttonAdaptive}
            disabled={!valueAdaptive}
          >
            Найти
          </button>
        </form>
      </div>
      {loading ? (
        <Preloader />
      ) : (
        <div className={style.numbers_wrapper}>
          {goldNumbers.length > 0 && <GoldNumber numbers={goldNumbers} />}
          {premiumNumbers.length > 0 && (
            <PremiumNumber numbers={premiumNumbers} />
          )}
          {vipNumbers.length > 0 && <VipNumber numbers={vipNumbers} />}
        </div>
      )}
      <UsefulArticles />

      {isRegisterOpen && (
        <RegisterModal
          isRegisterOpen={isRegisterOpen}
          setIsRegisterModal={setIsRegisterModal}
          setSuccessOpen={setOpenSuccess}
          setShowModal={setShowData}
          productName="Красивые номера"
        />
      )}

      {showData && (
        <RegisterData item={openSuccess} setOpenModal={setShowData} />
      )}
    </section>
  );
};
