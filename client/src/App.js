import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import Add from './components/Add'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Add} />
      {/* <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} /> */}
    </>
  );
}

export default App;
