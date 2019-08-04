import React from 'react';
import {
  Input,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from '@material-ui/core';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/InputStyles';
import { withRouter } from 'react-router-dom';

const SimpleSelect = ({ genres, history, selectGenre }) => {
  const { changed } = useThemeValue();
  const classes = styles(changed)();
  const [values, setValues] = React.useState({
    genre: ''
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));

    if (selectGenre) {
      selectGenre(event.target.value);
    }

    history.push(`/genre/${event.target.value}`);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel
          htmlFor="genre-helper"
          className={classes.label}
          style={{ color: changed ? 'secondary' : 'primary' }}
        >
          Genre
        </InputLabel>
        <Select
          value={values.genre}
          onChange={handleChange}
          input={<Input name="genre" id="genre-helper" />}
        >
          <MenuItem className={classes.item} value="">
            <em>None</em>
          </MenuItem>

          {genres.map(genre => (
            <MenuItem key={genre.id} className={classes.item} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Choose a Genre!</FormHelperText>
      </FormControl>
    </form>
  );
};

export default withRouter(SimpleSelect);
