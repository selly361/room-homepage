import BottomContent from 'components/BottomContent/BottomContent';
import { Fragment } from 'react';
import { GlobalStyle } from 'global/GlobalStyle';
import Header from 'components/Header/Header';
import React from 'react';
import Slider from 'components/Slider/Slider';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Slider />
      <BottomContent />
    </Fragment>
  );
}

export default App;
