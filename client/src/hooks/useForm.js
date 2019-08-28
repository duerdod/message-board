import { useState } from 'react';

const useForm = stateInit => {
  // Init with state.
  const [values, setValues] = useState(stateInit);

  const handleSubmit = (e, action) => {
    if (e) e.preventDefault();
    action(); // callback.
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  // "Valid" as far as the client is concerned.
  // const isValid =
  //   values.length && Object.values(values).every(value => value.length > 2);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues
  };
};

export default useForm;
