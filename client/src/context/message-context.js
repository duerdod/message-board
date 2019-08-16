import React, { createContext, useState } from 'react';
import useForm from '../hooks/useForm';
import useUser from '../hooks/useUser';

const MessageFormContext = createContext();

// This will probably be removed later on.
// No point of having this as "global state" ...
const MessageFormProvider = ({ children }) => {
  const { user } = useUser();
  const [isFormOpen, toggleFormOpen] = useState(false);
  const { handleChange, handleSubmit, values, setValues } = useForm({
    title: '',
    message: '',
    author: (user && user.username) || ''
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
