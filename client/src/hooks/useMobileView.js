import { useState, useEffect } from 'react';

// Returns bool
function getWindowWidth() {
  return window.innerWidth <= 880;
}

const useMobileView = () => {
  // Init state with getWindowWidth return.
  // Otherwise the user have to resize before any changes appears.
  const [isSmall, setScreenWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      // Sets bool
      setScreenWidth(getWindowWidth());
    }
    // Add resize event
    window.addEventListener('resize', handleResize);

    // Clean up resize event
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLarge = !isSmall;

  return {
    isSmall,
    isLarge
  };
};

// Should probably be called something else...
export default useMobileView;
