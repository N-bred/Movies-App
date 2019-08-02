import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import Attribution from './Attribution';

const Main = () => {
   return (
      <div>
         <TopBar />
         <TabsCom />
         <InputContainer />
         <MovieList />

         <Attribution />
      </div>
   );
};

export default Main;
