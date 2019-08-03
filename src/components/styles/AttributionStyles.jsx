import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  containerImg: {
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

export default styles;
