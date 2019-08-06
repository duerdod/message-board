import { useState, useEffect } from 'react';

function getWindowSize(setMobileView) {
  return setMobileView(window.innerWidth <= 750);
}

const useMobileView = () => {
  const [isMobileView, setMobileView] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', getWindowSize(setMobileView));

    return () => window.removeEventListener('resize', getWindowSize);
  }, [isMobileView]);

  return isMobileView;
};

export default useMobileView;
