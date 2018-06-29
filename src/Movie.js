import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{ //클래스 생성(컴포넌트) 
    render(){ //컴포넌트는 무조건 render!
        /*부모 app comp로부터 title정보 얻기위해서
        props 사용!! */
        console.log(this.props);
        // 브라우저 요소검사시 콘솔에서 부모comp의 정보 들을 확인할 수 있다. 
        return(// 랜더를 리턴해주어야한다!! 꼭! 
        //요소 엑세스: {this.props.[props's name]} //{}: jsx명령 괄호.
        <div>
            <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1> 

             
           
        </div>
        )       
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
    
}

export default Movie // app.js로 해당 컴포넌트 export! 
