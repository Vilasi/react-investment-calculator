import { useState } from 'react';

export default function Input({ children, id, onUserInput, userInput }) {
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
        onChange={(e) => onUserInput(e.target.value, id)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
        type={type}
        name={id}
        value={userInput[id]}
        required
      />
    </label>
  );
}
