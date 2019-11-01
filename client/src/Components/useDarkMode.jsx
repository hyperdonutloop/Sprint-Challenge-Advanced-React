import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useDarkMode (key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const body = document.querySelector('body');

  useEffect(() => {
    if(value) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  })
  return [value, setValue]
}

export default useDarkMode;