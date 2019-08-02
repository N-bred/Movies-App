import React from 'react';
import TopBar from './TopBar';
import MovieList from './MovieList';
import TabsCom from './Tabs';
import InputContainer from './InputContainer';
import Attribution from './Attribution';
import Theme from '../contexts/theme.context';

const Main = () => {
   return (
      <div>
         <Theme>
            <TopBar />
            <TabsCom />
            <InputContainer />
            <MovieList />

            <Attribution />
         </Theme>
      </div>
   );
};

export default Main;
