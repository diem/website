import React from 'react';

import FormContainer from '@theme/ContactForm/form-container';
import FormHeader from '@theme/ContactForm/form-header';

const FormThanks = (props) => {
  return (
    <FormContainer
      {...props}
      title="Thank you!"
      subtitle=""
    >
      <a className="button" href={props.config.baseUrl}>Return</a>
    </FormContainer>
  );
};

export default FormThanks;
