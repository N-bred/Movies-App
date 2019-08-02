import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: '2.5rem auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      '&': {
        maxWidth: '90%',
        margin: '2.5rem auto'
      }
    }
  }
}));

const InputContainer = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Input />
    </Paper>
  );
};

export default InputContainer;
