import { useState } from 'react';

// Use form hook.
const useForm = () => {
  // Init with empty state.
  const [values, setValues] = useState({});

  // On submit
  const handleSubmit = (e, action) => {
    if (e) e.preventDefault();
    action();
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  // Returns eact fn and state to be used insde stateful fn.
  return {
    handleChange,
    handleSubmit,
    values,
    setValues
  };
};

export default useForm;
