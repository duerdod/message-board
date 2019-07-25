import { useState } from 'react';

// Use form hook.
const useForm = callback => {
  // Init with empty state.
  const [values, setValues] = useState({});

  // On submit
  const handleSubmit = e => {
    if (e) e.preventDefault();
    // Exec callback.
    callback();
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  // Returns eact fn and state to be used insde stateful fn.
  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
