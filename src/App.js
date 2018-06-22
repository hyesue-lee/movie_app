import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [ //영화 List 있다고 가정..  
  "Before Sunrise",
  "Head on",
  "Midnight in Paris",
  "Shape of water",
  "Avengers"
]

/*이영화들의 제목을 자식 컴포넌트인 movie컴포넌트로 보내고싶다면
부모 comp: <Movie title={movies[0]}/> : 자식에게 제목보냄.
자식 comp: console.log(this.props); 자식컴포넌트는 부모에게 정보 얻기위해 props사용 */


class App extends Component { // Component called App  
  render() {//출력기능 
      return( 
      <div className="App">
       <Movie title={movies[0]}/> 
       <Movie title={movies[1]}/> 
       <Movie title={movies[2]}/> 
       <Movie title={movies[3]}/> 
       <Movie title={movies[4]}/> 
      </div>
      );
  }
}

export default App; //내보내기. 
