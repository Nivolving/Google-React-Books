import React, { useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SearchForm from './components/SearchForm'
import { Container, Jumbotron } from 'react-bootstrap';
import Results from './components/Results';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import googleBooksApi from "./utils/googleBooksApi";

function App() {

  return (  
    <div>
      <TopNav />
      <Container>
        <Jumbotron className="mt-4">
          <h1>React Google Books Search</h1>
          <h3> Search and save books of interest!</h3>
        </Jumbotron>

        <Router>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>
        
      </Container>
    </div>
  );
}

export default App;
