import React from 'react';
import blueLogo from '../img/svg/powered-by-square-blue.svg';
import greenLogo from '../img/svg/powered-by-square-green.svg';

const styles = {
   container: {
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem',
      height: '10rem',
      width: '10rem',
      background: '#fff'
   }
};

export default function Attribution() {
   return (
      <div style={styles.container}>
         <a href="https://www.themoviedb.org/" target="_blank">
            <img src={blueLogo} alt="Atrribution logo" />
         </a>
      </div>
   );
}
