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

const API =
  'https://api.themoviedb.org/3/discover/movie?api_key=6757aeed357f7728b398dc6c01d4c4e0';

class Main extends Component {
  state = {
    movies: [],
    loading: false
  };

  static contextType = Theme;

  componentDidMount() {
    this.setState(() => ({ loading: true }));
    const request = makeRequest(API);
    request
      .then(data => this.setState({ movies: data.results }))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  }

  render() {
    const { changed, backgroundMain, transition } = this.context;
    const { movies, loading } = this.state;
    return (
      <div
        style={{
          transition,
          background: changed && backgroundMain
        }}
      >
        <TopBar />
        <TabsCom />
        <InputContainer />
        {loading ? <LoadingSpinner /> : <MovieList movies={movies} />}
        <Attribution />
      </div>
    );
  }
}

export default Main;
