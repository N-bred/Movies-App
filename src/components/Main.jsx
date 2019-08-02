import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import MiniCardContainer from './MiniCardContainer';
import DetailPage from './DetailPage';

const Main = () => {
   return (
      <div>
         <TopBar />
         <TabsCom />
         <InputContainer />
         <MovieList />
         <MiniCardContainer />
         <DetailPage />
      </div>
   );
};

export default Main;
