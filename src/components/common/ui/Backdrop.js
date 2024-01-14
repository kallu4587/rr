import React from 'react';

import { Backdrop as BackDrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 10000,
    color: '#fff',
  },
}));

export const Backdrop = (props) => {
  const classes = useStyles();
  return (
    <BackDrop className={classes.backdrop} open={props.open}>
      <CircularProgress color="inherit" />
    </BackDrop>
  );
};

Backdrop.defaultProps = {
  open: false,
};
