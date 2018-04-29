import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header'
import NewsList from './container/newsList'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewsList/>
      </div>
    );
  }
}

export default App;
