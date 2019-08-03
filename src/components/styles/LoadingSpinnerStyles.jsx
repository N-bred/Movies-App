import { makeStyles } from '@material-ui/core/styles';

const styles = changed => {
  return makeStyles(theme => ({
    '@keyframes lds-roller': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    container: {
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ldsRoller: {
      display: 'inline-block',
      position: 'relative',
      width: '64px',
      height: '64px',

      '& div': {
        animation: '$lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        transformOrigin: '32px 32px',

        '&::after': {
          content: '" "',
          display: 'block',
          position: 'absolute',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: changed
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
          margin: '-3px 0 0 -3px'
        },

        '&:nth-child(1)': {
          animationDelay: '-0.036s',

          '&:after': {
            top: '50px',
            left: '50px'
          }
        },
        '&:nth-child(2)': {
          animationDelay: '-0.072s',

          '&:after': {
            top: '54px',
            left: '45px'
          }
        },
        '&:nth-child(3)': {
          animationDelay: '-0.108s',

          '&:after': {
            top: '57px',
            left: '39px'
          }
        },
        '&:nth-child(4)': {
          animationDelay: '-0.144s',

          '&:after': {
            top: '58px',
            left: '32px'
          }
        },
        '&:nth-child(5)': {
          animationDelay: '-0.18s',

          '&:after': {
            top: '57px',
            left: '25px'
          }
        },
        '&:nth-child(6)': {
          animationDelay: '-0.216s',

          '&:after': {
            top: '54px',
            left: '19px'
          }
        },
        '&:nth-child(7)': {
          animationDelay: '-0.252s',

          '&:after': {
            top: '50px',
            left: '14px'
          }
        },
        '&:nth-child(8)': {
          animationDelay: '-0.288s',

          '&:after': {
            top: '45px',
            left: '10px'
          }
        }
      }
    }
  }));
};

export default styles;
