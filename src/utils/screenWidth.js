import { debounce } from './debounce';
import React from 'react';

export const useScreenWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = React.useCallback(debounce(() => {
    setWidth(window.innerWidth);
  }, 200), []);
  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  return width;
};