import React, { useState } from 'react';
import blueLogo from '../img/svg/powered-by-square-blue.svg';
import greenLogo from '../img/svg/powered-by-square-green.svg';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
   containerImg: {
      background: '#fff',
      boderRadius: '4px',
      transition: 'transform .3s ease-in-out'
   },
   container: {
      height: '10rem',
      width: '10rem',
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem'
   },
   button: {
      position: 'absolute',
      top: '-50%',
      left: '0',
      zIndex: '10',
      background: 'rgba(0,0,0,.2)',
      '& svg path': {
         fill: '#de4536'
      },
      '&:hover': {
         background: 'rgba(0,0,0,.3)'
      }
   }
});

// { transform: show ? 'scale(1)' : 'scale(0)' }

export default function Attribution() {
   const classes = styles();
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
               <img src={blueLogo} alt="Atrribution logo" />
            </a>
         </div>
         <IconButton className={classes.button} onClick={handleShow}>
            <Cancel />
         </IconButton>
      </div>
   );
}
