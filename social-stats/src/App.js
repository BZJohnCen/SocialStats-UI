import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import RouteList from './routes/RouteList';
import { ToastContainer } from 'react-toastify';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
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
            {/*<SideBar />*/}
            <RouteList />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
