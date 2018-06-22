import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{ //클래스 생성(컴포넌트) 
    render(){ //컴포넌트는 무조건 render!
        return(// 랜더를 리턴해주어야한다!! 꼭! 
        <h1> Hello, this is a movie.</h1>
        )       
    }
}

export default Movie // app.js로 해당 컴포넌트 export! 
