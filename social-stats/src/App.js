import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import RouteList from './routes/RouteList';
import { ToastContainer } from 'react-toastify';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <SideBar />
          <div className='App-Content'>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <RouteList />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
