import React, { Component } from 'react';
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

class Detail extends Component {
  static defaultProps = {
    countries: [{ name: 'United States' }],
    genres: [{ name: 'horror' }]
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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
      `${movieDetailEndpoint}${params.id}?${API_KEY}`
    );
    movieRequest
      .then(data => this.setState({ movies: data }))
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 3000);
  }

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
  };

  showMiniCards = () => {
    this.setState({ showingMiniCards: !this.state.showingMiniCards });
  };

  render() {
    const { changed, backgroundMain, transition } = this.context;
    const { movies, loading, showNotFound, showingMiniCards } = this.state;
    const { countries: countriesFB, genres: genresFB } = this.props;

    return (
      <div
        style={{
          transition,
          background: changed && backgroundMain,
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
            movies={movies}
            showErrorNotFound={showNotFound}
          />
        )}

        <TabsCom />

        {loading ? (
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
          />
        )}
        <Attribution />
      </div>
    );
  }
}

export default Detail;
