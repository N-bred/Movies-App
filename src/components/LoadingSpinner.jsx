import React from 'react';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/LoadingSpinnerStyles';

const LoadingSpinner = () => {
  const { changed } = useThemeValue();
  const classes = styles(changed)();
  return (
    <div className={classes.container}>
      <div className={classes.ldsRoller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
