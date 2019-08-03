import React, { useState } from 'react';
import blueLogo from '../img/svg/powered-by-square-blue.svg';
import greenLogo from '../img/svg/powered-by-square-green.svg';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/AttributionStyles';

export default function Attribution() {
  const classes = styles();
  const { changed } = useThemeValue();
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  const animation = {
    transform: show ? 'translateX(0) scale(1)' : 'translateX(-150%) scale(0)'
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerImg} style={animation}>
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
}
