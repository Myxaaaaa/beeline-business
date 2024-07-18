import React from 'react';

export const Input = React.forwardRef(
  (
    {
      type,
      onChange,
      value,
      placeholder,
      id,
      onFocus,
      onBlur,
      onKeyDown,
      maxLength,
      className,
      name,
      checked,

    },
    ref,
  ) => {
    return (
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        id={id}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        className={className}
        ref={ref}
        name={name}
        checked={checked}
      />
    );
  },
);
