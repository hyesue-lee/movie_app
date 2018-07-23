import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [ // arrays.
  {
    title:"Before Sunrise",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg"

  },
  { 
    title:"Head on",
    poster: "https://media2.fdncms.com/chicago/imager/head-on/u/zoom/5723772/head_on.jpg"

  },
  { title:"Midnight in Paris",
  poster: "https://images-na.ssl-images-amazon.com/images/I/710PQRUAl-L._SY445_.jpg",

},
{ title:"Shape of water",
    poster: "https://cdn-images-1.medium.com/max/1382/1*NZhRKM4xvz27VLl5vJ73Sg.jpeg",

  }]

/*이영화들의 제목을 자식 컴포넌트인 movie컴포넌트로 보내고싶다면
부모 comp: <Movie title={movies[0]}/> : 자식에게 제목보냄.
자식 comp: console.log(this.props); 자식컴포넌트는 부모에게 정보 얻기위해 props사용 */


class App extends Component { // Component called App  


  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    console.log('did mount')
  }
  


  render() {//출력기능 
    console.log('did render')
      return( 
        //현재 movies는 array임. array에다가 map기능통해 새로운 array만든다.  
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key={index} />
        })} 
      </div>
    
      );
  }
}

export default App; //내보내기. 
