import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Snackbar, Backdrop } from '../../common/ui';
import { db } from '../../../config';

//eslint-disable-next-line
const emailMatch = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });
  const [backdrop, setBackdrop] = useState(false);

  const handleFormInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.value === '') {
      setError({
        ...error,
        [e.target.name]: true,
      });
    } else {
      if (e.target.name === 'email') {
        setError({
          ...error,
          email: !emailMatch.test(e.target.value),
        });
        return;
      }
      setError({
        ...error,
        [e.target.name]: false,
      });
    }
  };

  const handleSubmit = async () => {
    if (data.name === '' || data.email === '' || data.message === '') {
      return;
    }
    if (error.name || error.email || error.message) {
      return;
    }
    setBackdrop(true);
    db.collection('ContactUs')
      .add(data)
      .then((res) => {
        setSnackbar({
          open: true,
          message: 'Successfully sent!',
          severity: 'success',
        });
        setBackdrop(false);
        setData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          message: 'Something went wrong!',
          severity: 'danger',
        });
        setBackdrop(false);
        setData({ name: '', email: '', message: '' });
      });
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      open: false,
      severity: '',
      message: '',
    });
  };

  return (
    <div className='form-wrapper'>
      <div className='form-details'>
        <h1>Post your queries.</h1>
        <TextField
          name='name'
          value={data.name}
          onChange={handleFormInput}
          label='Name'
          placeholder='John Doe'
          fullWidth
          className='form-field'
          required
          error={error.name}
          helperText={error.name ? 'Please enter name' : ''}
        />
        <TextField
          name='email'
          value={data.email}
          onChange={handleFormInput}
          label='Email'
          placeholder='you@domain.com'
          fullWidth
          className='form-field'
          required
          error={error.email}
          helperText={error.email ? 'Please enter valid email' : ''}
        />
        <TextField
          name='message'
          value={data.message}
          onChange={handleFormInput}
          label='Message'
          placeholder='Your message'
          fullWidth
          className='form-field'
          required
          multiline
          rows='5'
          error={error.message}
          helperText={error.message ? 'Please enter message' : ''}
        />
        <button type='button' className='form-button' onClick={handleSubmit}>
          Send
        </button>
      </div>
      <Snackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={handleSnackbarClose}
      />
      <Backdrop open={backdrop} />
    </div>
  );
};

export default ContactForm;
