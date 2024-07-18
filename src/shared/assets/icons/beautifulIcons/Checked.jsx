import style from '../../../../components/beautifulNumb/typesOfNumb/styles/TypesNum.module.css';

export const Checked = () => {
  return (
    <svg
      className={style.checked}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="#FFD400" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="#FFD400" />
    </svg>
  );
};
