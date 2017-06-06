import React from 'react';

import appStyles from './appStyles.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';

const App = () => (
  <div>
    <Header />
    <div className={appStyles.body}>
      <Nav />
      <div>
        Body
      </div>
    </div>
  </div>
);

export default App;
