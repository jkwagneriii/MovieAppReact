import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import Add from './components/Add'
import Watchlist from './components/Watchlist'
import {GlobalProvider} from './context/GlobalState';
// import Contact from './components/Contact'

function App() {
  return (
    <GlobalProvider>
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Add} />
      <Route path="/topfive" component={Watchlist} />
      {/* <Route path="/contact" component={Contact} /> */}
    </>
    </GlobalProvider>
  );
}

export default App;
