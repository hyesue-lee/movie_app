import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [ //영화 List 있다고 가정..  
  "Before Sunrise",
  "Head on",
  "Midnight in Paris",
  "Shape of water",
  "Avengers"
]

const moviePosters = [
  "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg",
  "https://media2.fdncms.com/chicago/imager/head-on/u/zoom/5723772/head_on.jpg", 
  "https://images-na.ssl-images-amazon.com/images/I/710PQRUAl-L._SY445_.jpg",
  "https://cdn-images-1.medium.com/max/1382/1*NZhRKM4xvz27VLl5vJ73Sg.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" 
]

/*이영화들의 제목을 자식 컴포넌트인 movie컴포넌트로 보내고싶다면
부모 comp: <Movie title={movies[0]}/> : 자식에게 제목보냄.
자식 comp: console.log(this.props); 자식컴포넌트는 부모에게 정보 얻기위해 props사용 */


class App extends Component { // Component called App  
  render() {//출력기능 
      return( 
      <div className="App">
       <Movie poster={moviePosters[0] } title={movieTitles[0]}/>
       <Movie poster={moviePosters[1] } title={movieTitles[1]}/>
       <Movie poster={moviePosters[2] } title={movieTitles[2]}/>
       <Movie poster={moviePosters[3] } title={movieTitles[3]}/>
       <Movie poster={moviePosters[4] } title={movieTitles[4]}/>
      </div>
    
      );
  }
}

export default App; //내보내기. 
