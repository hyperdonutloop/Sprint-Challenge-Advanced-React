import React from 'react';
import useDarkMode from './useDarkMode'; //importing custom hook to navbar component

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false); //creating some variables and setting them to state. The state is my 'useDarkMode' custom hook. Setting the default state to false (off).
  const toggleMode = e => { //creating a function called toggleMode, and using preventDefault to prevent the browser from reloading/refreshing when the event 'e' happens.
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="nav-bar">
      <div className="dm-toggle">
        <button
          onClick={toggleMode} //this is calling the function toggleMode on line 6.
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

//Used custom Hook - MVP Requirement #3 ✅