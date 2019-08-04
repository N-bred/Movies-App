import React, { memo } from 'react';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/LoadingSpinnerStyles';

const LoadingSpinner = ({ small }) => {
  const { changed } = useThemeValue();
  const classes = styles(changed, small)();

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

export default memo(LoadingSpinner);
