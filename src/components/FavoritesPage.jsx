import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import Attribution from './Attribution';
import MiniCardContainer from './MiniCardContainer';
import LoadingSpinner from './LoadingSpinner';
import { makeRequest } from '../utils';
import { Theme } from '../contexts/theme.context';
import { API_KEY, discoverEndpoint, searchEndpoint } from '../API';

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      selectedGenre: '',
      searchMovies: [],
      loading: false,
      loadingSearchMovies: false,
      showNotFound: false,
      showingMiniCards: false,
      showFavoriteNotFound: false
    };
    this._typingTimeout = 0;
  }

  static contextType = Theme;

  componentDidMount() {
    this.setState(() => ({ loading: true }));

    this.setState(() => {
      if (JSON.parse(localStorage.getItem('favorites')).length < 1) {
        return { showFavoriteNotFound: true };
      } else {
        return { movies: JSON.parse(localStorage.getItem('favorites')) };
      }
    });

    const movieRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
    movieRequest
      .then(data => this.setState(() => ({ searchMovies: data.results })))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  }

  searchMovie = e => {
    this.setState({ loadingSearchMovies: true });
    if (this._typingTimeout) clearTimeout(this._typingTimeout);

    if (e.target.value.length <= 2) {
      const movieRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
      movieRequest
        .then(data =>
          this.setState({ searchMovies: data.results, showNotFound: false })
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
              searchMovies: data.results,
              showNotFound: false
            }));
          } else {
            this.setState(() => ({ showNotFound: true }));
          }
        })
        .catch(err => console.log(err));
    }

    this._typingTimeout = setTimeout(() => {
      this.setState(() => ({ loadingSearchMovies: false }));
    }, 2500);
  };

  showMiniCards = val => {
    this.setState({ showingMiniCards: val || !this.state.showingMiniCards });
  };
  render() {
    const { changed, backgroundMain, transition } = this.context;
    const {
      movies,
      loading,
      showNotFound,
      showingMiniCards,
      searchMovies,
      loadingSearchMovies,
      showFavoriteNotFound
    } = this.state;
    return (
      <div
        style={{
          transition,
          background: changed && backgroundMain,
          minHeight: '100vh'
        }}
      >
        <TopBar
          searchMovie={this.searchMovie}
          showMiniCards={this.showMiniCards}
        />
        {showingMiniCards && (
          <MiniCardContainer
            loading={loadingSearchMovies}
            movies={searchMovies}
            showErrorNotFound={showNotFound}
            showMiniCards={this.showMiniCards}
          />
        )}

        <TabsCom />

        {showFavoriteNotFound ? (
          <Typography
            color={changed ? 'secondary' : 'primary'}
            variant="h2"
            align="center"
          >
            You haven't added any favorites yet
          </Typography>
        ) : loading ? (
          <LoadingSpinner />
        ) : (
          <MovieList movies={movies} showErrorNotFound={showNotFound} />
        )}

        <Attribution />
      </div>
    );
  }
}

export default FavoritesPage;
