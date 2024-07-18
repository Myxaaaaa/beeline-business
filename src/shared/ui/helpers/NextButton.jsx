import rightImg from '../../assets/images/tariffsImages/right.png';
import { Button } from '../customButton/Button';
import style from './styles/NextButton.module.css';

export const handleNextSlide = (currentSlide, setCurrentSlide) => {
  setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1));
};

export const NextButton = ({ handleClick, styles }) => (
  <Button className={`${style.plans_slider_nextBtn} ${styles}`} onCLick={handleClick}>
    <img src={rightImg} alt="right" />
  </Button>
);
