import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import MiniCard from './MiniCard';

const Main = () => {
  return (
    <div>
      <TopBar />
      <TabsCom />
      <InputContainer />
      <MovieList />
      <MiniCard />
    </div>
  );
};

export default Main;
