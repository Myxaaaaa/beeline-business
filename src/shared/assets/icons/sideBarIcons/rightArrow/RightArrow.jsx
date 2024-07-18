import styles from '../../../../../components/sideBar/styles/SideBar.module.css';

export const RightArrow = ({ isActive }) => {
  return (
    <section className={isActive ? styles.rightArrowRotate : styles.rightArrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#CACACA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};
