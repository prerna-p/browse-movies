import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Landing from './components/Landing';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
