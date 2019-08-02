import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& div, & p, & label': {
      fontSize: '1.6rem'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  item: {
    fontSize: '1.6rem'
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    genre: ''
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="genre-helper">Genre</InputLabel>
        <Select
          value={values.genre}
          onChange={handleChange}
          input={<Input name="genre" id="genre-helper" />}
        >
          <MenuItem className={classes.item} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.item} value={10}>
            Ten
          </MenuItem>
          <MenuItem className={classes.item} value={20}>
            Twenty
          </MenuItem>
          <MenuItem className={classes.item} value={30}>
            Thirty
          </MenuItem>
        </Select>
        <FormHelperText>Choose a Genre!</FormHelperText>
      </FormControl>
    </form>
  );
}
