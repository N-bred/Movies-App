import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper, marked) => {
  return makeStyles({
    card: {
      maxWidth: '100%',
      position: 'relative',
      transition,
      background: changed && backgroundPaper
    },
    media: {
      height: 250
    },
    title: {
      fontSize: '2.2rem',
      color: changed && '#fff'
    },
    content: {
      fontSize: '1.5rem',
      color: changed && '#fff'
    },
    button: {
      fontSize: '1.4rem'
    },
    favorite: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '10',
      background: 'rgba(0,0,0,.3)',

      '&:hover': {
        background: 'rgba(0, 0, 0, .5)'
      },

      '& svg path': {
        fill: marked ? '#de4536' : '#fff'
      }
    },
    cardActions: {
      borderTop: changed && '1px solid rgba(255,255,255,.4)',
      background: changed && backgroundPaper,
      transition
    }
  });
};

export default styles;
