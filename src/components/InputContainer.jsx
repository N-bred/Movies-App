import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import { useThemeValue } from '../contexts/theme.context';

const InputContainer = () => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: '2.5rem auto',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      background: changed && backgroundPaper,
      transition,
      [theme.breakpoints.down('sm')]: {
        '&': {
          maxWidth: '90%',
          margin: '2.5rem auto'
        }
      }
    }
  }));
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Input />
    </Paper>
  );
};

export default InputContainer;
