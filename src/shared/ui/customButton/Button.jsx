export const Button = ({ className, onCLick, children, id, ref, type }) => {
  return (
    <button type={type} className={className} onClick={onCLick} ref={ref} >
      {children}
    </button>
  );
};
