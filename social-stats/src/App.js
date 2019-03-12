import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import RouteList from './routes/RouteList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <SideBar />
          <div className='App-Content'>
            <RouteList/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
