import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../../../../components/TextInput/TextInput';
import Button from '../../../../../../components/Button/Button';

const SignupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    onSubmit(name, email);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <TextInput
        htmlFor="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        htmlFor="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={submit} disabled={!name || !email}>
        Submit
      </Button>
    </div>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignupForm.defaultProps = {
  onSubmit: () => {},
};

export default SignupForm;
