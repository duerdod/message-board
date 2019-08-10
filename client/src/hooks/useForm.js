import { useState } from 'react';

const useForm = stateInit => {
  // Init with state.
  const [values, setValues] = useState(stateInit);

  // On submit
  const handleSubmit = (e, action) => {
    if (e) e.preventDefault();
    action();
  };

  // On input change.
  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  // "Valid" as far as the client is concerned.
  const isValid = Object.values(values).every(value => value.length > 2);

  // Returns each as an object to be used insde stateful fn.
  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    isValid
  };
};

export default useForm;
