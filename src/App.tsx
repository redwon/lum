import React from 'react';

import './App.scss';

import { ExamplePageWithArticle } from './components/ExamplePageWithArticle/ExamplePageWithArticle';

function App() {
  return (
    <div className="app">
      <header className="app__header">App Header</header>
      <ExamplePageWithArticle />
    </div>
  );
}

export default App;
