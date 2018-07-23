import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




/*이영화들의 제목을 자식 컴포넌트인 movie컴포넌트로 보내고싶다면
부모 comp: <Movie title={movies[0]}/> : 자식에게 제목보냄.
자식 comp: console.log(this.props); 자식컴포넌트는 부모에게 정보 얻기위해 props사용 */


class App extends Component { // Component called App  

  // Render: componentWillMount() -> render() -> componentDidMount()

  //Update componentWillReceiveProps -> shouldComponentUpdate() -> render() -> component

// React LifeCycles.
  componentWillMount(){ // 1. Will mount 
    console.log('will mount')
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () =>  { // 기능직접생성.
    const movies = this.state.movies.map(movie => {
      console.log(movie)
    return <Movie 
            title = {movie.title_english} 
            poster = {movie.medium_cover_image} 
            key={movie.id} 
            genres = {movie.genres}
            synopsis={movie.synopsis}
            />
  })
  return movies
} 

_getMovies = async () =>{ // 가지고온 데이터 state에 셋팅.. 
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => { // json 사용하여 무비 api 로부터 데이터 가져옴..
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err)) // 이러나면 캐치로 잡음.
}
state = {

}

  render() {//출력기능 
    console.log('did render') // 2. render
      return( 
        //현재 movies는 array임. array에다가 map기능통해 새로운 array만든다.  
      <div className="App">
       {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    
      );
  }
}

export default App; //내보내기. 
