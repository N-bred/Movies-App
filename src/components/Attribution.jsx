import React, { memo } from 'react';
import blueLogo from '../img/svg/powered-by-square-blue.svg';
import greenLogo from '../img/svg/powered-by-square-green.svg';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/AttributionStyles';
import useLocalStorageToggle from '../hooks/useLocalStorageToggle';

const Attribution = () => {
  const [show, handleShow] = useLocalStorageToggle(false, 'showAttribution');
  const classes = styles(show)();
  const { changed } = useThemeValue();

  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={changed ? greenLogo : blueLogo} alt="Atrribution logo" />
        </a>
      </div>
      <IconButton className={classes.button} onClick={handleShow}>
        <Cancel />
      </IconButton>
    </div>
  );
};

export default memo(Attribution);
