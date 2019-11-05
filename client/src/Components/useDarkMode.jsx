import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useDarkMode (key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue); //creating variables and giving them state; the state being 'useLocalStorage'
  const body = document.querySelector('body'); //assigning the 'body' variable to the actual CSS body tag

  useEffect(() => {
    if(value) {       //if the 'value' is true the run the block of code to ADD 'dark-mode' class to body 
      body.classList.add('dark-mode'); 
    } else {          //if the 'value' is false run the block of code to REMOVE 'dark-mode' class from body
      body.classList.remove('dark-mode');
    }
  })
  return [value, setValue] 
}

export default useDarkMode;