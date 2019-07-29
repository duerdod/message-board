import { useState } from 'react';

// Use form hook.
const useForm = () => {
  // Init with empty state.
  const [values, setValues] = useState({});

  // On submit
  const handleSubmit = (e, action) => {
    if (e) e.preventDefault();
    action();
    // Set empty state also removes the message if the mutation did not succeed. Rewrite to handle errors.
    setValues({});
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
