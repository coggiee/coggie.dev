import { useState } from 'react';

export const useModal = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const toggleModal = (value?: boolean) => {
    if (!value) {
      setState(!state);
    } else {
      setState(value);
    }
  };

  return [state, toggleModal] as const;
};
