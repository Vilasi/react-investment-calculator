import { useState } from 'react';

export default function Input({ children, id }) {
  const [type, setType] = useState('text');

  function handleFocus() {
    setType('number');
  }

  function handleBlur() {
    setType('text');
  }

  return (
    <label htmlFor={id}>
      {children}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
        type={type}
        name={id}
        required
      />
    </label>
  );
}
