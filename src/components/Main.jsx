import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import MiniCardContainer from './MiniCardContainer';

const Main = () => {
  return (
    <div>
      <TopBar />
      <TabsCom />
      <InputContainer />
      <MovieList />
      <MiniCardContainer />
    </div>
  );
};

export default Main;
