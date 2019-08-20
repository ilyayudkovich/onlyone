import React from 'react';
import logo from './logo.svg';
import Landing from './components/Landing';
import './App.css';

class App extends React.Component {
  
  render() {
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Landing/>
          </div>
        </div>
      );
    }
}

export default App;

