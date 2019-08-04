import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import Attribution from './Attribution';
import MiniCardContainer from './MiniCardContainer';
// import DetailPage from './DetailPage';
import LoadingSpinner from './LoadingSpinner';
import { makeRequest } from '../utils';
import { Theme } from '../contexts/theme.context';
import {
  API_KEY,
  discoverEndpoint,
  genreEndpoint,
  searchEndpoint
} from '../API';

class Genre extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      selectedGenre: '',
      loading: false,
      showNotFound: false,
      showingMiniCards: false
    };
    this._typingTimeout = 0;
  }

  static contextType = Theme;

  componentDidMount() {
    this.setState(() => ({ loading: true }));
    const { params } = this.props.match;
    const movieRequest = makeRequest(
      `${discoverEndpoint}${API_KEY}&sort_by=popularity.desc&with_genres=${
        params.id
      }`
    );
    movieRequest
      .then(data => this.setState({ movies: data.results }))
      .catch(err => console.log(err));

    const genresRequest = makeRequest(
      `${genreEndpoint}${API_KEY}&language=en-US`
    );
    genresRequest
      .then(data => {
        const id = Number(this.props.match.params.id);

        const finded = data.genres.find(genre => genre.id === id);

        this.setState(() => ({
          genres: data.genres,
          selectedGenre: finded.name
        }));
      })
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  }

  selectGenre = value => {
    const finded = this.state.genres.find(genre => genre.id === value);
    this.setState({ selectedGenre: finded.name, loading: true });

    const genreRequest = makeRequest(
      `${discoverEndpoint}${API_KEY}&sort_by=popularity.desc&with_genres=${value}`
    );

    genreRequest
      .then(data => this.setState(() => ({ movies: data.results })))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  };

  searchMovie = e => {
    this.setState({ loading: true });
    if (this._typingTimeout) clearTimeout(this._typingTimeout);

    if (e.target.value.length <= 2) {
      const movieRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
      movieRequest
        .then(data =>
          this.setState({ movies: data.results, showNotFound: false })
        )
        .catch(err => console.log(err));
    }

    if (e.target.value.length >= 3) {
      const searchRequest = makeRequest(
        `${searchEndpoint}${e.target.value}&${API_KEY}`
      );

      searchRequest
        .then(data => {
          if (data.results.length > 1) {
            this.setState(() => ({
              movies: data.results,
              showNotFound: false
            }));
          } else {
            this.setState(() => ({ showNotFound: true }));
          }
        })
        .catch(err => console.log(err));
    }

    this._typingTimeout = setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 2500);
  };

  showMiniCards = val => {
    this.setState({ showingMiniCards: val || !this.state.showingMiniCards });
  };
  render() {
    const {
      changed,
      backgroundMain,
      transition,
      backgroundLight
    } = this.context;
    const {
      movies,
      loading,
      genres,
      showNotFound,
      showingMiniCards,
      selectedGenre
    } = this.state;

    return (
      <div
        style={{
          transition,
          background: changed ? backgroundMain : backgroundLight,
          minHeight: '100vh'
        }}
      >
        <TopBar
          searchMovie={this.searchMovie}
          showMiniCards={this.showMiniCards}
        />
        {showingMiniCards && (
          <MiniCardContainer
            loading={loading}
            movies={movies}
            showErrorNotFound={showNotFound}
            showMiniCards={this.showMiniCards}
          />
        )}

        <TabsCom />
        <InputContainer genres={genres} selectGenre={this.selectGenre} />

        <Typography
          color={changed ? 'secondary' : 'primary'}
          variant="h2"
          align="center"
        >
          {selectedGenre}
        </Typography>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <MovieList movies={movies} showErrorNotFound={showNotFound} />
        )}
        <Attribution />
      </div>
    );
  }
}

export default Genre;
