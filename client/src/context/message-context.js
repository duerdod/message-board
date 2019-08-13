import React, { createContext, useState } from 'react';
import useForm from '../hooks/useForm';

const MessageFormContext = createContext();

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
