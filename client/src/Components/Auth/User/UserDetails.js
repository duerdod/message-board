import React from 'react';
// import styled from '@emotion/styled';
import { Formik } from 'formik';

const UserDetails = ({ currentUser }) => {
  // const { firstname, lastname, username, email, password } = currentUser;

  return (
    <div>
      <Formik initialValues={null}>
        <input type="text" />
      </Formik>
    </div>
  );
};

export default UserDetails;
