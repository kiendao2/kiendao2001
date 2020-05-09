import React, { Component } from 'react';
import {
    BrowserRouter as Router,
   
    Route,
   
  } from "react-router-dom";
import New from '../components/New';
import NewDetail from '../components/NewDetail';
import Contact from '../components/Contact';
import Home from '../components/Home';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/tin"><New /></Route>
          <Route exact path="/tin-chi-tiet"><NewDetail /></Route>
          <Route exact  path="/lien-he"><Contact /> </Route>
          </Router>
        );
    }
}

export default DieuHuongURL;