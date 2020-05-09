import React from 'react';

import './../fcss/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../RouterPublicURl/DieuHuongURL';
function App() {
  return (
    <div>
      <Nav/>
      <DieuHuongURL/>
      <Footer/>
    </div>
  );
}


export default App;
