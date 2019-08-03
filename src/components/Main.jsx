import React, { Component } from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import Attribution from './Attribution';
// import MiniCardContainer from './MiniCardContainer';
// import DetailPage from './DetailPage';
import LoadingSpinner from './LoadingSpinner';
import { makeRequest } from '../utils';
import { Theme } from '../contexts/theme.context';
import { API_KEY, discoverEndpoint, genreEndpoint } from '../API';

class Main extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: '',
    loading: false
  };

  static contextType = Theme;

  componentDidMount() {
    this.setState(() => ({ loading: true }));
    const movieRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
    movieRequest
      .then(data => this.setState({ movies: data.results }))
      .catch(err => console.log(err));

    const genresRequest = makeRequest(
      `${genreEndpoint}${API_KEY}&language=en-US`
    );
    genresRequest
      .then(data => this.setState({ genres: data.genres }))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  }

  selectGenre = value => {
    this.setState({ selectedGenre: value, loading: true });

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

  render() {
    const { changed, backgroundMain, transition } = this.context;
    const { movies, loading, genres, selectedGenre } = this.state;
    return (
      <div
        style={{
          transition,
          background: changed && backgroundMain
        }}
      >
        <TopBar />
        <TabsCom />
        <InputContainer
          genres={genres}
          selectGenre={this.selectGenre}
          selectedGenre={selectedGenre}
        />
        {loading ? <LoadingSpinner /> : <MovieList movies={movies} />}
        <Attribution />
      </div>
    );
  }
}

export default Main;
