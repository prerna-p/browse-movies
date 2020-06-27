import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Landing from './components/Landing';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Landing />
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }

}

export default App;

/**
 * HashRouter helps for deployment to GitHub pages
 * vs BrowserRouter
 */