import { useState } from 'react';

const useForm = () => {
  // Init with state.
  const stateInit = {
    title: '',
    message: '',
    author: ''
  };
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

  // "Valid" as far as the client is concerned. This looks stupid. Rewrite.
  const isValid =
    values.title &&
    values.title.length >= 2 &&
    values.message &&
    values.message.length >= 2 &&
    values.author &&
    values.author.length >= 2
      ? true
      : false;

  // Returns each as an object to be used insde stateful fn.
  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    isValid,
    stateInit
  };
};

export default useForm;
