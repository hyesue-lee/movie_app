import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component { // Component called App  
  render() {//출력기능 
      return( 
      <div className="App">
       <Movie /> 
      </div>
      );
  }
}

export default App; //내보내기. 
