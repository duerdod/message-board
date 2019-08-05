import { useEffect, createRef, useState } from 'react';

const useAutoFocus = input => {
  input.createRef();
  useEffect(() => {
    input.target.focus();
  });

  return true;
};

export default useAutoFocus;
