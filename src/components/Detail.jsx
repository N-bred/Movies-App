import React, { PureComponent } from 'react';
import TopBar from './TopBar';
import TabsCom from './Tabs';
import Attribution from './Attribution';
import MiniCardContainer from './MiniCardContainer';
import DetailPage from './DetailPage';
import LoadingSpinner from './LoadingSpinner';
import { makeRequest } from '../utils';
import { Theme } from '../contexts/theme.context';
import {
  API_KEY,
  discoverEndpoint,
  searchEndpoint,
  movieDetailEndpoint
} from '../API';
import { convertMoney, minToHours } from '../utils';

class Detail extends PureComponent {
  static defaultProps = {
    countries: [{ name: 'United States' }],
    genres: [{ name: 'horror' }]
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesDefault: [],
      selectedGenre: '',
      loading: false,
      showNotFound: false,
      showingMiniCards: false,
      firstLoading: false
    };
    this._typingTimeout = 0;
  }

  static contextType = Theme;

  componentDidMount() {
    this.setState(() => ({ firstLoading: true }));

    const { params } = this.props.match;
    const movieRequest = makeRequest(
      `${movieDetailEndpoint}${params.id}?${API_KEY}`
    );
    movieRequest
      .then(data => this.setState({ movies: data }))
      .catch(err => console.log(err));

    const movieDefaultRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
    movieDefaultRequest
      .then(data => this.setState({ moviesDefault: data.results }))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ firstLoading: false }));
    }, 3000);
  }

  searchMovie = e => {
    this.setState({ loading: true });
    if (this._typingTimeout) clearTimeout(this._typingTimeout);

    if (e.target.value.length <= 2) {
      const movieRequest = makeRequest(`${discoverEndpoint}${API_KEY}`);
      movieRequest
        .then(data =>
          this.setState({ moviesDefault: data.results, showNotFound: false })
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
              moviesDefault: data.results,
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
    this.setState({ showingMiniCards: val });
  };

  selectMovie = id => {
    this.setState(() => ({ firstLoading: true }));
    const movieRequest = makeRequest(`${movieDetailEndpoint}${id}?${API_KEY}`);
    movieRequest
      .then(data => this.setState({ movies: data }))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ firstLoading: false }));
    }, 3000);
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
      showNotFound,
      showingMiniCards,
      moviesDefault,
      firstLoading
    } = this.state;
    const { countries: countriesFB, genres: genresFB } = this.props;

    return (
      <div
        style={{
          transition,
          background: changed ? backgroundMain : backgroundLight,
          minHeight: '100vh',
          overflow: 'hidden'
        }}
      >
        <TopBar
          searchMovie={this.searchMovie}
          showMiniCards={this.showMiniCards}
        />
        {showingMiniCards && (
          <MiniCardContainer
            loading={loading}
            movies={moviesDefault}
            showErrorNotFound={showNotFound}
            showMiniCards={this.showMiniCards}
            selectMovie={this.selectMovie}
          />
        )}

        <TabsCom />

        {firstLoading ? (
          <LoadingSpinner />
        ) : (
          <DetailPage
            title={movies.original_title}
            tagline={movies.tagline}
            date={movies.release_date}
            duration={minToHours(movies.runtime)}
            description={movies.overview}
            countries={movies.production_countries || countriesFB}
            budget={convertMoney(movies.budget)}
            revenue={convertMoney(movies.revenue)}
            genres={movies.genres || genresFB}
            posterUrl={movies.poster_path}
            imdbId={movies.imdb_id}
            id={movies.id}
            movie={movies}
          />
        )}
        <Attribution />
      </div>
    );
  }
}

export default Detail;
