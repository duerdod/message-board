import React, { createContext, useState } from 'react';
import useForm from '../hooks/useForm';

const MessageFormContext = createContext();

// This will probably be removed later on.
// No point of having this as "global state" ...
const MessageFormProvider = ({ children }) => {
  const [isFormOpen, toggleFormOpen] = useState(false);
  const { handleChange, handleSubmit, values, setValues } = useForm({
    title: '',
    message: '',
    author: ''
  });

  return (
    <MessageFormContext.Provider
      value={{
        isFormOpen,
        toggleFormOpen,
        handleChange,
        handleSubmit,
        values,
        setValues
      }}
    >
      {children}
    </MessageFormContext.Provider>
  );
};

export { MessageFormContext, MessageFormProvider };
