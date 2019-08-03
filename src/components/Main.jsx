import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import Attribution from './Attribution';
import { useThemeValue } from '../contexts/theme.context';

const Main = () => {
  const { changed, transition, backgroundMain } = useThemeValue();
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
      <MovieList />
      <Attribution />
    </div>
  );
};

export default Main;
