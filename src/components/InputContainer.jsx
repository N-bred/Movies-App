import React from 'react';
import Paper from '@material-ui/core/Paper';
import Input from './Input';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/InputContainerStyles';

const InputContainer = () => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper)();

  return (
    <Paper square className={classes.root}>
      <Input />
    </Paper>
  );
};

export default InputContainer;
