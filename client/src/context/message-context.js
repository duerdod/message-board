import React, { createContext, useState } from 'react';
import useForm from '../hooks/useForm';
import useUser from '../hooks/useUser';

const MessageFormContext = createContext();

// This will probably be removed later on.
// No point of having this as context ... I think.
const MessageFormProvider = ({ children }) => {
  const { user } = useUser();

  const stateInit = {
    title: '',
    message: '',
    author: (user && user.username) || ''
  };

  const [isFormOpen, toggleFormOpen] = useState(false);
  const { handleChange, handleSubmit, values, setValues } = useForm(stateInit);

  return (
    <MessageFormContext.Provider
      value={{
        isFormOpen,
        toggleFormOpen,
        handleChange,
        handleSubmit,
        values,
        setValues,
        stateInit
      }}
    >
      {children}
    </MessageFormContext.Provider>
  );
};

export { MessageFormContext, MessageFormProvider };
