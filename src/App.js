import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header'
import NewsList from './container/newsList'
import Pagination from './components/Pagination'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewsList/>
        <Pagination/>
      </div>
    );
  }
}

export default App;
