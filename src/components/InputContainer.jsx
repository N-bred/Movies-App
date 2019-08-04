import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from './Input';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/InputContainerStyles';

const InputContainer = ({ genres, selectGenre }) => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper)();

  return (
    <Paper square className={classes.root}>
      <Input genres={genres} selectGenre={selectGenre} />
    </Paper>
  );
};

export default memo(InputContainer);
