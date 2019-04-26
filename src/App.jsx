import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import news from './components/news';
import Customnavbar from './components/Customnavbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Customnavbar />
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/news" component={news} />
        </div>
      </Router>
      );
  }
}

export default App;
